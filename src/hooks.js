const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');

const hooks = [
  {
    hook: 'bootstrap',
    name: 'copyAssetsToPublic',
    description:
      'Copies ./assets/ to the "distDir" defined in the elder.config.js. This function helps support the live reload process.',
    run: ({ settings }) => {
      // note that this function doesn't manipulate any props or return anything.
      // It is just executed on the 'bootstrap' hook which runs once when Elder.js is starting.

      // copy assets folder to public destination
      glob.sync(path.resolve(settings.rootDir, './assets/**/*')).forEach((file) => {
        const parsed = path.parse(file);
        // Only write the file/folder structure if it has an extension
        if (parsed.ext && parsed.ext.length > 0) {
          const relativeToAssetsArray = parsed.dir.split('assets');
          relativeToAssetsArray.shift();

          const relativeToAssetsFolder = `.${relativeToAssetsArray.join()}/`;
          const p = path.parse(path.resolve(settings.distDir, relativeToAssetsFolder));
          fs.ensureDirSync(p.dir);
          fs.outputFileSync(
            path.resolve(settings.distDir, `${relativeToAssetsFolder}${parsed.base}`),
            fs.readFileSync(file),
          );
        }
      });
    },
  },
];
module.exports = hooks;

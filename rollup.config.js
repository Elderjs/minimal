require('dotenv').config();

const { getRollupConfig } = require('@elderjs/elderjs');
const svelteConfig = require('./svelte.config');
module.exports = [
  ...getRollupConfig({ svelteConfig, rollupConfig: { replacements: { 'http://localhost:4020': 'works' } } }),
];

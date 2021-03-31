module.exports = [
  {
    /**
     * This is a simple shortcode that will wrap content with a magical box.
     * Try adding `{{box class="yellow"}}Your content here{{/box}}` in one of your markdown files.
     * */
    shortcode: 'box',
    run: async ({ content, props }) => {
      return {
        // this is what the shortcode is replaced with. You CAN return an empty string.
        html: `<div class="box ${props.class}">${content}</div>`,

        // This is added to the page's css through the cssStack. You probably want an external css file for most usecases.
        css: '.box{border:1px solid red; padding: 1rem; margin: 1rem 0;} .box.yellow {background: lightyellow;}',

        // Javascript that is added to the footer via the customJsStack.
        js: '<script>var test = true;</script>',

        // Arbitrary HTML that is added to the head via the headStack
        head: '<meta test="true"/>',
      };
    },
  },
];

module.exports = [
  {
    shortcode: 'shortcode',
    run: async ({ allRequests, data, helpers, settings, request, props, content, query }) => {
      return {
        html: 'Implement your shortcode',
        js: '',
        head: '',
        css: '',
      };
    },
  },
];

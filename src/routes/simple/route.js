module.exports = {
  all: async () => [{ slug: 'simple' }],
  permalink: ({ request }) => `/${request.slug}/`,
  data: async () => {
    return {};
  },
};

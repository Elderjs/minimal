module.exports = {
  all: () => [{ slug: 'simple' }],
  permalink: ({ request }) => `/${request.slug}/`,
  data: () => {
    return {};
  },
};

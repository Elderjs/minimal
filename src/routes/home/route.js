module.exports = {
  all: async () => [{ slug: '/' }],
  permalink: ({ request }) => request.slug,
  data: async () => {
    return {
      works: true,
    };
  },
};

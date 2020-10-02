module.exports = {
  all: () => [{ slug: '/' }],
  permalink: ({ request }) => request.slug,
  data: () => {
    return {
      works: true,
    };
  },
};

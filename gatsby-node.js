exports.createPages = async ({ actions }) => {
  console.log('asdf');
  actions.createPage({
    path: 'asdf',
    component: require.resolve('./src/components/hi.js'),
  });
};

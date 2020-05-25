const path = require('path');

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const pokemons = [
    { name: 'Pikachu', type: 'electric' },
    { name: 'Squirtle', type: 'water' },
  ];
  pokemons.forEach((pokemon) => {
    const node = {
      name: pokemon.name,
      type: pokemon.type,
      id: createNodeId(`Pokemon-${pokemon.name}`),
      internal: {
        type: 'Pokemon',
        contentDigest: createContentDigest(pokemon),
      },
    };
    actions.createNode(node);
  });
};

exports.createPages = async ({ graphql, actions }) => {
  actions.createPage({
    path: 'examples',
    component: require.resolve('./src/templates/example.js'),
    context: {
      name: 'Squirtle',
    },
  });

  const result = await graphql(`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
`);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.frontmatter.path,
      component: require.resolve('./src/templates/blogPost.js'),
      context: {}, // additional data can be passed via context
    });
  });
};

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
            title
            image
            path
            type
          }
        }
      }
    }
  }
`);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const relatedArticles = [];

    result.data.allMarkdownRemark.edges.forEach((page) => {
      if (page.node.frontmatter.type === node.frontmatter.type && page.node.frontmatter.title !== node.frontmatter.title) {
        relatedArticles.push({
          title: node.frontmatter.title,
          path: node.frontmatter.path,
          image: node.frontmatter.image,
          type: node.frontmatter.type,
        });
      }
    });

    actions.createPage({
      path: node.frontmatter.path,
      component: require.resolve('./src/templates/blogPost.js'),
      context: {
        related: relatedArticles,
      }, // additional data can be passed via context
    });
  });
};

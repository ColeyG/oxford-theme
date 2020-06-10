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
            backupImage
          }
        }
      }
    }
  }
`);
  const { edges } = result.data.allMarkdownRemark;
  edges.forEach(({ node }) => {
    const relatedArticles = [];

    // Checking for related articles
    edges.forEach((edge) => {
      if (node.frontmatter.type === edge.node.frontmatter.type && node.frontmatter.title !== edge.node.frontmatter.title) {
        if (edge.node.frontmatter.image) {
          relatedArticles.push(
            {
              title: edge.node.frontmatter.title,
              path: edge.node.frontmatter.path,
              image: edge.node.frontmatter.image,
              type: edge.node.frontmatter.type,
            },
          );
        } else if (edge.node.frontmatter.backupImage) {
          relatedArticles.push(
            {
              title: edge.node.frontmatter.title,
              path: edge.node.frontmatter.path,
              backupImage: edge.node.frontmatter.backupImage,
              type: edge.node.frontmatter.type,
            },
          );
        }
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

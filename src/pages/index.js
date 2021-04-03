import React from 'react';
import { graphql, Link } from 'gatsby';
import Header from '../components/header';
import Jumbotron from '../components/jumbotron';
import Footer from '../components/footer';

const index = ({ data }) => {
    const { allMarkdownRemark, allArticle } = data;
    const { edges } = allMarkdownRemark;
    const articles = allArticle.edges;

    const featuredContent = [
        'GBA Demo', // TODO: Load featured content from a config
        'Gatsby & React',
        'That Animation',
    ];
    const featuredContentPosts = [];
    const recentPosts = [];
    const otherNeatArticles = [];

    function isFeaturedPost(postName, featuredContent) {
        return (featuredContent.indexOf(postName) > -1);
    }

    edges.forEach((edge, index) => {
        const { node } = edge;
        const { frontmatter } = node;

        if (isFeaturedPost(frontmatter.title, featuredContent)) {
            featuredContentPosts.push(<Link key={index} to={frontmatter.path}>{frontmatter.title}</Link>);
        } else {
            recentPosts.push(<Link key={index} to={frontmatter.path}>{frontmatter.title}</Link>);
        }
    });

    articles.forEach((article, index) => {
        const node = article.node;

        if (otherNeatArticles.length < 5) {
            otherNeatArticles.push(<a key={index} href={node.link} target="_blank" rel="nofollow">{node.name}</a>);
        }
    });

    return (
        <div className="cl-wrapper">
            <div className="cl-page">
                <Header mainTitle="Cole Geerts" />
                <Jumbotron exClassName="index-jumbotron" />
                <h3>Featured Posts</h3>
                <div className="article-container">
                    {featuredContentPosts}
                </div>
                <h3>Recent Posts</h3>
                <div className="article-container">
                    {recentPosts}
                </div>
                <h3>Other Neat Articles</h3>
                <div className="article-container">
                    {otherNeatArticles}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export const pageQuery = graphql`
{
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    limit: 1000
  ) {
    edges {
      node {
        frontmatter {
          path
          title
          image
          type
        }
      }
    }
  }
  allArticle {
    edges {
      node {
        id
        link
        name
      }
    }
  }
}
`;

export default index;

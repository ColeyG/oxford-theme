import React from 'react';
import { graphql, Link } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';

export default ({ data }) => {
  const { allMarkdownRemark } = data;
  const { edges } = allMarkdownRemark;
  const blogPosts = [];

  edges.forEach((edge, index) => {
    const { node } = edge;
    const { frontmatter } = node;

    blogPosts.push(<Link key={index} to={frontmatter.path}>{frontmatter.title}</Link>);
  });

  return (
    <div className="cl-wrapper">
      <div className="cl-page">
        <Header mainTitle="Cole Geerts" />
        <h3>All Blog Posts In Order</h3>
        <div className="article-container">
          {blogPosts}
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
}
`;

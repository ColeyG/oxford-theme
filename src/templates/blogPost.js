import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  if (frontmatter.image) {
    return (
      <div className="cl-wrapper">
        <div className="cl-page">
          <Header mainTitle="Cole Geerts" />
          <div className="cl-article">
            <h2>{frontmatter.title}</h2>
            <img src={require(`../../assets/${frontmatter.image}`)} alt={frontmatter.imageAlt} />
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className="cl-wrapper">
      <div className="cl-page">
        <Header mainTitle="Cole Geerts" />
        <div className="cl-article">
          <h2>{frontmatter.title}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image
      }
    }
  }
`;

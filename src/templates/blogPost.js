import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import RelatedPost from '../components/related-posts';
import Footer from '../components/footer';

export default function Template({ data, pageContext }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  let imageArea = null;
  let date = null;
  let related = null;

  if (frontmatter.image) {
    imageArea = <img className="cl-article-image" src={require(`../../assets/optimized/${frontmatter.image}`)} alt={frontmatter.imageAlt} />;
  }

  if (frontmatter.date) {
    date = <p className="cl-date">{frontmatter.date}</p>;
  }

  if (frontmatter.type && pageContext.related.length) {
    related = <RelatedPost type={frontmatter.type} related={pageContext.related} />;
  }

  return (
    <div className="cl-wrapper">
      <div className="cl-page">
        <Header mainTitle="Cole Geerts" />
        <div className="cl-article">
          <h2>{frontmatter.title}</h2>
          {date}
          {imageArea}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        {related}
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
        type
      }
    }
  }
`;

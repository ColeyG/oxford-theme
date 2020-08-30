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
  let revisions = null;
  let related = null;

  if (frontmatter.image) {
    imageArea = <img className="cl-article-image" src={require(`../../assets/${frontmatter.image}`)} alt={frontmatter.imageAlt} />;
  }

  if (frontmatter.date) {
    if (frontmatter.revisions) {
      date = <p className="cl-date">Originally Posted on: {frontmatter.date}</p>;
    } else {
      date = <p className="cl-date">{frontmatter.date}</p>;
    }
  }

  if (frontmatter.revisions) {
    let revisionString = '';

    frontmatter.revisions.forEach((rev, index) => {
      if (frontmatter.revisions.length !== index + 1) {
        revisionString += `${rev}, `;
      } else {
        revisionString += `${rev}`;
      }
    });

    revisions = <p className="cl-date">Revisions: {revisionString}</p>;
  }

  if (frontmatter.type && pageContext.related.length) {
    related = <RelatedPost type={frontmatter.type} related={pageContext.related} />;
  }

  return (
    <div className="cl-wrapper">
      <div className="cl-page">
        <Header mainTitle="Cole Geerts" />
        {/* <div className="cl-article-wrapper"> */}
        <div className="cl-article">
          <h2>{frontmatter.title}</h2>
          {date}
          {revisions}
          {imageArea}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        {/* </div> */}
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
        revisions
      }
    }
  }
`;

import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import CardContainer from '../components/card-container';
import Card from '../components/card';
import Footer from '../components/footer';

export default ({ data }) => {
  const { allMarkdownRemark } = data;
  const { edges } = allMarkdownRemark;
  const blogPosts = [];

  edges.forEach((edge, index) => {
    const { node } = edge;
    const { frontmatter } = node;

    // FIXME: Card Mess
    if (frontmatter.image) {
      blogPosts.push(<Card key={index} bgImage={require(`../../assets/optimized/${frontmatter.image}`)} cardTitle={frontmatter.title} link={frontmatter.path} type={frontmatter.type} />);
    } else if (frontmatter.backupImage) {
      blogPosts.push(<Card key={index} backupImage={require(`../../assets/optimized/${frontmatter.backupImage}`)} cardTitle={frontmatter.title} link={frontmatter.path} type={frontmatter.type} />);
    } else {
      blogPosts.push(<Card key={index} cardTitle={frontmatter.title} link={frontmatter.path} type={frontmatter.type} />);
    }
  });

  return (
    <div className="cl-wrapper">
      <div className="cl-page">
        <Header mainTitle="Cole Geerts" />
        <div className="blog">
          <CardContainer cardConTitle="All Blog Posts in Order">
            {blogPosts}
          </CardContainer>
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
          backupImage
        }
      }
    }
  }
}
`;

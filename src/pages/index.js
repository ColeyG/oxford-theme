import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Jumbotron from '../components/jumbotron';
import CardContainer from '../components/card-container';
import Card from '../components/card';
import Footer from '../components/footer';

export default ({ data }) => {
  const { allMarkdownRemark } = data;
  const { edges } = allMarkdownRemark;

  const featuredContent = [
    'Gatsby & React', // TODO: Load featured content from a config
  ];
  const featuredContentPosts = [];
  const recentPosts = [];

  // Prepping Featured content based on the array above
  featuredContent.forEach((pageTitle, index) => {
    edges.forEach((edge) => {
      const { node } = edge;
      const { frontmatter } = node;

      if (frontmatter.title === pageTitle) {
        featuredContentPosts.push(<Card key={index} bgImage={frontmatter.image} backupImage={frontmatter.backupImage} cardTitle={frontmatter.title} link={frontmatter.path} type={frontmatter.type} />);
        featuredContent.splice(index);
      }
    });
  });

  if (featuredContent.length > 0) {
    let errs = '';
    featuredContent.forEach((missingPost) => {
      errs += ` ${missingPost}`;
    });
    console.error(`Missing featured content: ${errs}`);
  }

  // Prepping All posts content
  edges.forEach((edge, index) => {
    const { node } = edge;
    const { frontmatter } = node;

    recentPosts.push(<Card key={index} bgImage={frontmatter.image} backupImage={frontmatter.backupImage} cardTitle={frontmatter.title} link={frontmatter.path} type={frontmatter.type} />);
  });

  return (
    <div className="cl-wrapper">
      <div className="cl-page">
        <Header mainTitle="Cole Geerts" />
        <Jumbotron exClassName="index-jumbotron" />
        <CardContainer exClassName="index-section" cardConTitle="Featured Content">
          {featuredContentPosts}
          {featuredContent}
        </CardContainer>
        <CardContainer cardConTitle="Recent Posts">
          {recentPosts}
        </CardContainer>
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

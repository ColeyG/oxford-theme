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
  ]; // Kind of a faux pas but I mutate this array later to contain cards of the featured content
  const recentPosts = [];

  // Prepping Featured content based on the array above
  featuredContent.forEach((pageTitle, index) => {
    edges.forEach((edge) => {
      const { node } = edge;
      const { frontmatter } = node;
      if (frontmatter.title === pageTitle) {
        // IMPROVE: This silently fails if no featured content is found and displays the string. Maybe
        // remove the string and log an error if that happens?
        if (frontmatter.image) {
          featuredContent[index] = <Card key={index} bgImage={require(`../../assets/optimized/${frontmatter.image}`)} cardTitle={frontmatter.title} link={frontmatter.path} type={frontmatter.type} />;
        } else {
          featuredContent[index] = <Card key={index} cardTitle={frontmatter.title} link={frontmatter.path} type={frontmatter.type} />;
        }
      }
    });
  });

  // Prepping All posts content
  edges.forEach((edge, index) => {
    const { node } = edge;
    const { frontmatter } = node;

    if (frontmatter.image) {
      recentPosts.push(<Card key={index} bgImage={require(`../../assets/optimized/${frontmatter.image}`)} cardTitle={frontmatter.title} link={frontmatter.path} type={frontmatter.type} />);
    } else if (frontmatter.backupImage) {
      recentPosts.push(<Card key={index} backupImage={require(`../../assets/optimized/${frontmatter.backupImage}`)} cardTitle={frontmatter.title} link={frontmatter.path} type={frontmatter.type} />);
    } else {
      recentPosts.push(<Card key={index} cardTitle={frontmatter.title} link={frontmatter.path} type={frontmatter.type} />);
    }
  });

  return (
    <div className="cl-wrapper">
      <div className="cl-page">
        <Header mainTitle="Cole Geerts" />
        <Jumbotron exClassName="index-jumbotron" />
        <CardContainer exClassName="index-section" cardConTitle="Featured Content">
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

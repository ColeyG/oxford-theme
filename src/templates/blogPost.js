import React from 'react';
import { graphql, Link } from 'gatsby';
import Header from '../components/header';
import RelatedPost from '../components/related-posts';
import Footer from '../components/footer';

export default function Template({ data, pageContext }) {
    const { markdownRemark, allArticle } = data;
    const { frontmatter, html } = markdownRemark;
    const articles = allArticle.edges;
    let imageArea = null;
    let date = null;
    let revisions = null;
    let related = null;
    let otherNeatArticles = [];

    if (frontmatter.image) {
        imageArea = <img className="cl-article-image" src={require(`../../assets/${frontmatter.image}`).default} alt={frontmatter.imageAlt} />;
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

    articles.forEach((article, index) => {
        const node = article.node;

        if (otherNeatArticles.length < 3) {
            otherNeatArticles.push(<a key={index} href={node.link} target="_blank" rel="nofollow">{node.name}</a>);
        }
    });

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

    otherNeatArticles = shuffle(otherNeatArticles);

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
                <p className='article-cta'>Comments, questions, concerns? Something wrong? <Link to="/contact">Contact me here</Link>.</p>
                {related}
                <h3>Other Neat Articles</h3>
                <div className="article-container">
                    {otherNeatArticles}
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
        type
        revisions
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

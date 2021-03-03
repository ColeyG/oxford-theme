import React from 'react';
import { Link } from 'gatsby';

export default function RelatedPosts(props) {
  const links = [];

  props.related.forEach((relatedPost, index) => {
    // links.push(<Card key={index} bgImage={relatedPost.image} backupImage={relatedPost.backupImage} cardTitle={relatedPost.title} link={relatedPost.path} type={relatedPost.type} />);
    links.push(<Link key={index} to={relatedPost.path}>{relatedPost.title}</Link>);
  });

  return (
    <div className="cl-related-posts-con">
      <h3>Related Posts</h3>
      <div className="article-container">
        {links}
      </div>
    </div>
  );
}

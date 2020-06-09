import React from 'react';
import Card from './card';

export default function RelatedPosts(props) {
  const cards = [];

  props.related.forEach((relatedPost, index) => {
    if (relatedPost.image) {
      cards.push(<Card key={index} bgImage={require(`../../assets/optimized/${relatedPost.image}`)} cardTitle={relatedPost.title} link={relatedPost.path} type={relatedPost.type} />);
    } else {
      cards.push(<Card key={index} cardTitle={relatedPost.title} link={relatedPost.path} type={relatedPost.type} />);
    }
  });

  return (
    <div className="cl-related-posts-con">
      <h3>Related Posts</h3>
      <div className="cl-related-posts">
        {cards}
      </div>
    </div>
  );
}

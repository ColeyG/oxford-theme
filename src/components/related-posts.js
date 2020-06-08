import React from 'react';

export default function RelatedPosts(props) {
  const pages = props.data;
  console.log(pages);

  return (
    <div className="cl-related-posts-con">
      <h3>Related Posts</h3>
      <div className="cl-related-posts">
        {props.children}
      </div>
    </div>
  );
}

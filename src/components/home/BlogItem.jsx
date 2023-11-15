import React from "react";

const BlogItem = (props) => {
    const {blogData} = props
    // console.log(blogData);
  const { id, title, topic, author, imageUrl, avatarUrl } = blogData;

  return (
    <div className="blog-item-container">
      <div className="blog-item-image-container">
        <img src={imageUrl} alt={author} />
      </div>

      <div className="blog-item-text-container">
        <span className="topic">{topic}</span>
        <h3 className="title">{title}</h3>
        <div className="author-container">
          <img className="author-avatar" src={avatarUrl} alt={author} />
          <span className="author-name">{author}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;

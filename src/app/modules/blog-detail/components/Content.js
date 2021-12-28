import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetailContent = ({ item }) => {
  const { id, content, image_url, title } = item;
  return (
    <div className="blog-post">
      <div className="blog-post-header">
        <Link to={`/blog/${id}`}>
          <img src={image_url} alt={title} />
        </Link>
        <h2 className="blog-post-header__title">{title}</h2>
        <div className="blog-post-header__info">
          <p>Đăng bởi Giangle | 30/06/2015 | 60 bình luận</p>
        </div>
      </div>
      <div className="blog-post-content">
        <p>{content}</p>
      </div>
    </div>
  )
}

export default BlogDetailContent;

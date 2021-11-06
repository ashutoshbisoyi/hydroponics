import React from 'react';
import './BlogCard.scss';
const BlogCard = ({ title, content, link, image }) => {
  return (
    <div className='blog-card'>
      <div className='image' style={{ backgroundImage: `url(${image})` }}></div>
      <h4>{title}</h4>
      <p>{`${content.slice(0, 300)}...`}</p>
      <a href={link} target='_blank' rel='noreferrer'>
        <button className='filled'>Read More</button>
      </a>
    </div>
  );
};

export default BlogCard;

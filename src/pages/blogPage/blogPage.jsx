import React from 'react';
import './blogPage.scss';
import { blogs } from './mock';

const BlogPage = () => {
  return (
    <div className="blogPage">
      <div className="container">
        <h2 className="mb-4">Blog Page</h2>
        {blogs.map(item => {
          return (
            <div className="card" key={item.id}>
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <a href={item.link}>Read more</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog">
      <Navbar />
      <div className="blog-content">
        <h1>Our Blog</h1>
        <p>Stay tuned for the latest updates, product news, and tips!</p>
        <div className="blog-posts">
          <div className="post">
            <h2>Post Title 1</h2>
            <p>Content for blog post 1...</p>
          </div>
          <div className="post">
            <h2>Post Title 2</h2>
            <p>Content for blog post 2...</p>
          </div>
          {/* Add more posts here */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;

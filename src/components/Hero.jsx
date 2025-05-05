import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>Welcome to Our Shop</h1>
        <p>Explore our exclusive products and services.</p>
      </div>
      <div className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default Hero;

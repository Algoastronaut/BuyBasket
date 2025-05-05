import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="about-content">
        <h1>About Us</h1>
        <p>We are an e-commerce platform focused on delivering quality products at affordable prices.</p>
      </div>
      <Footer />
    </div>
  );
};

export default About;

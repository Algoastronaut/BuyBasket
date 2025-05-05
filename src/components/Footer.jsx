import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="quick-links">
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
      <div className="social-links">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
      <div className="contact-info">
        <p>Email: support@shop.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>
      <div className="copyright">
        <p>© 2025 Your Company Name</p>
      </div>
    </footer>
  );
};

export default Footer;

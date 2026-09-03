import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-grid">
          
          <div className="footer-col">
            <h4>Categories</h4>
            <ul>
              <li><a href="#cakes">Cakes</a></li>
              <li><a href="#biscuits">Biscuits</a></li>
              <li><a href="#pastries">Pastries</a></li>
              <li><a href="#salads">Salads</a></li>
              <li><a href="#bread">Bread</a></li>
              <li><a href="#pizzas">Pizzas</a></li>
              <li><a href="#donuts">Donuts</a></li>
              <li><a href="#snacks">Snacks</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#b2b">B2B</a></li>
              <li><a href="#gifting">Art of Gifting</a></li>
              <li><a href="#build-cake">Build My Cake</a></li>
              <li><a href="#pickup">Pick-up</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Enter the world of Malva</h4>
            <p className="newsletter-text">News, Bakery Creation & Latest events in stores.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/malvasweetsandbakers/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Twitter">TW</a>
            </div>
            
            <div className="contact-details mt-4">
              <p>Karmani Shah Road, Chung Multan Road</p>
              <p>Lahore, Punjab 54600</p>
              <p>Call Us: 0346 4718877</p>
              <p>malvasweetsandbakers@gmail.com</p>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Malva Sweets & Bakers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

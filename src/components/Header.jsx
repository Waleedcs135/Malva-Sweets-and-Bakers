import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import SearchOverlay from './SearchOverlay';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-top-bar">
          <div className="header-top-inner container">
            <div className="contact-info">
              <span>Call Us: 0346 4718877</span>
            </div>
            <div className="utility-links">
              <a href="#">Gifting</a>
              <a href="#">Locations</a>
              <a href="#">Track Order</a>
            </div>
          </div>
        </div>
        
        <div className="header-main container">
          <div className="header-left">
            <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            
            <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
              <div className="nav-links">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Menu</Link>
                <Link to="/category/cat1" onClick={() => setIsMenuOpen(false)}>Cakes</Link>
                <Link to="/category/cat4" onClick={() => setIsMenuOpen(false)}>Sweets</Link>
                <Link to="/category/gift1" onClick={() => setIsMenuOpen(false)}>Gifting</Link>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Our Tradition</Link>
              </div>
            </nav>
          </div>

          <div className="logo-container">
            <Link to="/">
              <img src="/images/logo.jpg" alt="Malva Sweets & Bakers" className="logo-image" />
            </Link>
          </div>

          <div className="header-right">
            <div className="header-icons">
              <button className="icon-btn" aria-label="Search" onClick={() => setIsSearchOpen(true)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
              <button className="icon-btn cart-btn" aria-label="Cart" onClick={() => setIsCartOpen(true)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span className={`cart-count ${totalItems > 0 ? 'has-items' : ''}`}>{totalItems}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;

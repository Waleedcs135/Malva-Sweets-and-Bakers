import React, { useState, useEffect, useRef } from 'react';
import { allProducts } from '../data/mockData';
import './SearchOverlay.css';

const SearchOverlay = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'auto';
      setSearchTerm('');
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredProducts = searchTerm.trim() === '' 
    ? [] 
    : allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="search-overlay animate-fade-in">
      <div className="search-header container">
        <div className="search-input-wrapper">
          <svg className="search-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Search for cakes, sweets, biscuits..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <button className="close-search-btn" onClick={onClose} aria-label="Close search">
          &times;
        </button>
      </div>

      <div className="search-results container">
        {searchTerm.trim() !== '' && filteredProducts.length === 0 && (
          <p className="no-results">No products found for "{searchTerm}"</p>
        )}
        
        {filteredProducts.length > 0 && (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-img-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-overlay">
                    <button className="add-to-cart-btn">Add to Cart</button>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchOverlay;

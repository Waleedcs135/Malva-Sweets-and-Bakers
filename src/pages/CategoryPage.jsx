import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categoriesList, giftingCategories, allProducts } from '../data/mockData';
import { useCart } from '../context/CartContext';
import '../components/Categories.css';

const CategoryPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState({});

  // Find the category info from either standard categories or gifting categories
  const categoryInfo = 
    categoriesList.find(c => c.id === id) || 
    giftingCategories.find(c => c.id === id);

  const activeProducts = allProducts.filter(p => p.categoryId === id);

  const handleAddToCart = (product) => {
    addToCart(product);
    // Show "Added!" feedback on the button briefly
    setAddedItems(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 1200);
  };

  if (!categoryInfo) {
    return (
      <div className="container" style={{ padding: '150px 0', textAlign: 'center' }}>
        <h2>Category not found</h2>
        <Link to="/" className="btn-primary" style={{ marginTop: '20px' }}>Return Home</Link>
      </div>
    );
  }

  return (
    <section className="section" style={{ paddingTop: '150px', minHeight: '80vh' }}>
      <div className="container">
        <div className="products-view animate-fade-in">
          <Link to="/" className="btn-back" style={{ textDecoration: 'none' }}>
            &larr; Back to Home
          </Link>
          <h2 className="section-title">{categoryInfo.name}</h2>
          
          {activeProducts.length > 0 ? (
            <div className="products-grid">
              {activeProducts.map(product => (
                <div className="product-card" key={product.id}>
                  <div className="product-img-wrapper">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-overlay">
                      <button
                        className={`add-to-cart-btn ${addedItems[product.id] ? 'added' : ''}`}
                        onClick={() => handleAddToCart(product)}
                      >
                        {addedItems[product.id] ? '✓ Added' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-products">No items currently available in this category.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;

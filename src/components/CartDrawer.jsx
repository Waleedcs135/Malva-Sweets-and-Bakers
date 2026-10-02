import React, { useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

const CartDrawer = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const drawerRef = useRef(null);

  // Close drawer on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };
    if (isCartOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isCartOpen, setIsCartOpen]);

  // Format number to Pakistani Rupee format
  const formatPrice = (num) => {
    return 'Rs. ' + num.toLocaleString('en-PK');
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`cart-backdrop ${isCartOpen ? 'active' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart drawer panel */}
      <div
        ref={drawerRef}
        className={`cart-drawer ${isCartOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Shopping Cart"
      >
        {/* Header */}
        <div className="cart-drawer-header">
          <div className="cart-drawer-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <h3>Your Cart <span className="cart-drawer-count">({totalItems})</span></h3>
          </div>
          <button className="cart-drawer-close" onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Cart content */}
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </div>
            <h4>Your cart is empty</h4>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <button className="cart-continue-btn" onClick={() => setIsCartOpen(false)}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Items list */}
            <div className="cart-items-list">
              {cartItems.map((item, index) => (
                <div
                  className="cart-item"
                  key={item.id}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <p className="cart-item-price">{item.price}</p>
                    <div className="cart-item-actions">
                      <div className="quantity-control">
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </button>
                      </div>
                      <button
                        className="cart-item-remove"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name}`}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-total">
                    {formatPrice((item.numericPrice || 0) * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="cart-drawer-footer">
              <button className="cart-clear-btn" onClick={clearCart}>
                Clear Cart
              </button>
              <div className="cart-subtotal">
                <span>Subtotal</span>
                <span className="cart-subtotal-price">{formatPrice(totalPrice)}</span>
              </div>
              <p className="cart-shipping-note">Shipping & taxes calculated at checkout</p>
              <button className="cart-checkout-btn">
                Proceed to Checkout
              </button>
              <button className="cart-continue-link" onClick={() => setIsCartOpen(false)}>
                or Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;

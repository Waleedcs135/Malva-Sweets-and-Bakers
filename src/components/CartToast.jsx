import React from 'react';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

const CartToast = () => {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div className="cart-toast" key={toast.id}>
      {toast.product?.image && (
        <div className="cart-toast-image">
          <img src={toast.product.image} alt={toast.product.name} />
        </div>
      )}
      <div className="cart-toast-content">
        <p>{toast.product?.name}</p>
        <span>{toast.message}</span>
      </div>
      <div className="cart-toast-check">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default CartToast;

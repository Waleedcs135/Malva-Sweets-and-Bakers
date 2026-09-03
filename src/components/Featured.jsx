import React from 'react';
import './Featured.css';

const Featured = () => {
  return (
    <section className="featured-section">
      <div className="featured-container">
        <div className="featured-content">
          <h2 className="featured-title">Signature Chocolate Fudge Cake</h2>
          <p className="featured-desc">
            Experience our most loved, rich and decadent chocolate fudge cake. 
            Made with premium Belgian chocolate and layered with our signature fudge frosting.
          </p>
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;

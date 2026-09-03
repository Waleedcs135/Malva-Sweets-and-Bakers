import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: 'url(/images/hero-tea-cake.png)' }}></div>
      <div className="hero-content">
        <h3 className="hero-subtitle animate-fade-in">Signature</h3>
        <h1 className="hero-title animate-fade-in">Plain Tea Cake</h1>
        <p className="hero-desc animate-fade-in">
          Perfectly moist and light, our signature tea cake is the perfect companion for your afternoon tea.
        </p>
        <div className="hero-actions animate-fade-in">
          <a href="#menu" className="btn-primary">Order Now</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

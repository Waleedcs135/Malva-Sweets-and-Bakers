import React from 'react';
import './Tradition.css';

const Tradition = () => {
  return (
    <section className="section tradition-section" id="about">
      <div className="container tradition-container">
        <h2 className="tradition-title">The Classic Baking Tradition</h2>
        <div className="tradition-content">
          <p>
            Malva Sweets and Bakers is a culture, tradition, lifestyle and class of Pakistan, with a legacy of providing the finest quality baked goods and traditional sweets. We believe in making this world a better place by sharing love, empathy and happiness.
          </p>
          <a href="#about-us" className="btn-outline">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default Tradition;

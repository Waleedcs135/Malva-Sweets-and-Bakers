import React from 'react';
import { Link } from 'react-router-dom';
import { giftingCategories } from '../data/mockData';
import './Gifting.css';
import './Categories.css';

const Gifting = () => {
  return (
    <section className="section gifting-section" id="gifting">
      <div className="container">
        <h2 className="section-title">Gifting</h2>
        <div className="gifting-intro">
          <p>
            Our gifting collection is thoughtfully crafted to bring joy and a smile to your face. Whether it's a birthday, anniversary, or your special day, a gift from Malva Sweets & Bakers is a wonderful way to express your care for your loved one.
          </p>
        </div>
        
        <div className="gifting-grid">
          {giftingCategories.map(cat => (
            <Link 
              to={`/category/${cat.id}`} 
              className="gifting-card animate-fade-in" 
              key={cat.id}
            >
              <div className="gifting-img" style={{ backgroundImage: `url(${cat.image})` }}></div>
              <h3>{cat.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gifting;

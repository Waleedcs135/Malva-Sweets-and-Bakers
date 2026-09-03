import React from 'react';
import { Link } from 'react-router-dom';
import { categoriesList } from '../data/mockData';
import './Categories.css';

const Categories = () => {
  return (
    <section className="section premium-categories" id="menu">
      <div className="container">
        <h2 className="section-title">Categories</h2>
        <div className="masonry-grid">
          {categoriesList.map(cat => (
            <Link 
              to={`/category/${cat.id}`} 
              className="category-tile animate-fade-in" 
              key={cat.id}
            >
              <div className="category-tile-img" style={{ backgroundImage: `url(${cat.image})` }}></div>
              <div className="category-tile-content">
                <h3>{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

import React from 'react';
import './ProductPage.css';
import vrImage from '../img/hero-bg.jpg'; // Import the image

const ProductPage = () => {
  return (
    <section className="product-section">
      <div className="container">
        <h2 className="section-title">Product Features</h2>
        <div className="product-description">
          <img src={vrImage} alt="Innovatech VR Pro" />
          <div className="product-details">
            <p>The Innovatech VR Pro offers an unparalleled virtual reality experience with cutting-edge features:</p>
            <ul>
              <li>4K Resolution</li>
              <li>120Hz Refresh Rate</li>
              <li>Advanced Motion Tracking</li>
              <li>Lightweight and Comfortable</li>
              <li>Wide Compatibility</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;

import React from 'react';
import './ProductPage.css';

const ProductPage = () => {
  return (
    <section className="product-section">
      <div className="container">
        <h2 className="section-title">Product Features</h2>
        <div className="product-description">
          <img src="/img/vr1.jpg" alt="Innovatech VR Pro" />
          <div className="product-details">
            <p>The Innovatech VR Pro offers an unparalleled virtual reality experience with cutting-edge features:</p>
            <ul>
              <li>4K Resolution</li>
              <li>120Hz Refresh Rate</li>
              <li>Advanced Motion Tracking</li>
              <li>Lightweight and Comfortable</li>
              <li>Wide Compatibility</li>
            </ul>
            <video controls>
              <source src="/videos/product-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;

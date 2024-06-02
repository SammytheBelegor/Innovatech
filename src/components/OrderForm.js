import React, { useState } from 'react';
import './OrderForm.css';

const OrderForm = () => {
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const quantity = form.quantity.value.trim();

    if (!name || !email || !quantity || quantity <= 0) {
      setFormMessage('Please fill in all fields with valid information.');
      return;
    }

    setFormMessage('Thank you for your pre-order!');
    form.reset();
  };

  return (
    <section className="order-form-section">
      <div className="container">
        <h2 className="section-title">Pre-Order Now</h2>
        <form id="preorder-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="quantity">Number of Devices:</label>
          <input type="number" id="quantity" name="quantity" min="1" required />
          
          <button type="submit">Submit</button>
        </form>
        {formMessage && <div id="form-message">{formMessage}</div>}
      </div>
    </section>
  );
};

export default OrderForm;

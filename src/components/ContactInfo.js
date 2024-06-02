import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <section className="contact-info-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p>Email: support@innovatech.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Tech Avenue, Silicon Valley, CA</p>
      </div>
    </section>
  );
};

export default ContactInfo;

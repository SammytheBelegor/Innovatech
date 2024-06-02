import React from 'react';
import ProductPage from './components/ProductPage';
import OrderForm from './components/OrderForm';
import NewsFeed from './components/NewsFeed';
import ContactInfo from './components/ContactInfo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Innovatech VR Pro</h1>
        <nav>
          <a href="#product">Product</a>
          <a href="#order">Pre-order</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <div className="container">
        <section id="product">
          <ProductPage />
        </section>
        <section id="order">
          <OrderForm />
        </section>
        <section id="news">
          <NewsFeed />
        </section>
        <section id="contact">
          <ContactInfo />
        </section>
      </div>
    </div>
  );
}

export default App;

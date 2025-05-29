import React from 'react';
import './Shop.css';
import Card from '../Card/Card';
import Card1 from '../Card/Card1';
import FooterPage from '../component/FooterPage';

function Shop() {
  return (
    <>
    <div className="shop-page">
      <section
        className="shop-banner"
        style={{
          backgroundImage: "url('Shop/Shop-Page-Top-Banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="shop-banner-content">
          <h1>Shop the Latest Trends</h1>
          <p>Discover new arrivals and top fashion picks just for you.</p>
        </div>
      </section>

      <div className="shop-content">
        <h2>Our Products</h2>
        <Card />
        <Card1 />
      </div>
    </div>
    <FooterPage />
    </>
  );
}

export default Shop;

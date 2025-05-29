import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import FooterPage from '../component/FooterPage';
import Card from '../Card/Card';
import Card1 from '../Card/Card1';

function Home() {
  return (
    <>
      <section id="Home-Page-Main-Banner" className="section section-main-banner"
        style={{
          position: "relative",
          overflow: "hidden",
        }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="main-banner-video-bg"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            pointerEvents: "none", // Prevent interaction
            userSelect: "none",    // Prevent selection
          }}
          tabIndex={-1} // Not focusable
          draggable={false} // Not draggable
          onContextMenu={e => e.preventDefault()} // Prevent right-click menu
        >
          <source src="/Home/banner-bg.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2>The Best Look</h2>
          <h2>
            AnyWhere <i className="fa-brands fa-d-and-d"></i> Anytime
          </h2>
          <h1>On Veyra.</h1>
          <p>
            Try it With Passion <i className="fa-brands fa-d-and-d"></i> Style that Speaks
          </p>
          <button className="shop-button">
            <Link className="shoplink" to="/shop">
              Shop Now
            </Link>
          </button>
        </div>
      </section>
 
      <section id="Home-Page-Benefits" className="section benefits">
        <div className="Home-Page-feature-box">
          <img src="/Features/f1.png" alt="Feature 1 Icon" />
          <h6>Secure and Reliable</h6>
        </div>

        <div className="Home-Page-feature-box">
          <img src="/Features/f2.png" alt="Feature 2 Icon" />
          <h6>Fast Performance</h6>
        </div>

        <div className="Home-Page-feature-box">
          <img src="/Features/f3.png" alt="Feature 3 Icon" />
          <h6>Save Money</h6>
        </div>

        <div className="Home-Page-feature-box">
          <img src="/Features/f5.png" alt="Feature 5 Icon" />
          <h6>Happy Sell</h6>
        </div>

        <div className="Home-Page-feature-box">
          <img src="/Features/f6.png" alt="Feature 5 Icon" />
          <h6>24/7 Customer Support</h6>
        </div>
      </section>
      <div className="Home-shop-content">
      <h2>Our Products</h2>
      <Card />
      </div>

      <section id="Home-Page-Banner1" className="section banner1">
        <h4>On Weekend Days</h4>
        <h2>
          GET Up to <span>40% Off </span>ON All PRODUCTS
        </h2>
        <button className="banner-button">
          <Link to="/shop">Explore More</Link>
        </button>
      </section>
      <br /><br />

      <div className="Home-shop-content">
        <h2>New Arrivals</h2>
      <Card1 />
      </div> 

      <section id="Home-Page-Banner2" className="section banner2">
        <div className="banner2-box1"
          style={{
            backgroundImage: "url('Home/Home-Page-Banner3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <h4>Super Saving deals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>Get best dresses is on sale at Veyra.</span>
          <Link to="/shop" className="banner-button">Know More</Link>

        </div>
        <div className="banner2-box2"
          style={{
            backgroundImage: "url('Home/Home-Page-Banner4.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <h4>spring summer</h4>
          <h2>upcoming season</h2>
          <span>All Best Dresses At One Place Veyra</span>
          <button className="banner-button">
            <Link to="/shop">Collection</Link>
          </button>
        </div>
      </section>

      <section id="Home-Page-Banner3" className="section banner3">
        <div className="banner3-box1"
          style={{
            backgroundImage: "url('Home/Home-Page-Banner5.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <h2>SEASONAL SALE</h2>
          <h3>Winter Collection Up to 40% OFF</h3>
        </div>
        <div className="banner3-box2"
          style={{
            backgroundImage: "url('Home/Home-Page-Banner6.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <h2>NEW CLOTHES COLLECTION</h2>
          <h3>Spring / Summer 2025</h3>
        </div>
        <div className="banner3-box3"
          style={{
            backgroundImage: "url('Home/Home-Page-Banner7.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <h2>T-SHIRTS</h2>
          <h3>New Trends Find Here</h3>
        </div>
      </section>
      <FooterPage />
    </>
  ); 
}

export default Home;

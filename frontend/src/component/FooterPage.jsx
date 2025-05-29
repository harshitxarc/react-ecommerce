import React, { useState } from 'react';    
import { Link } from 'react-router-dom'
import './FooterPage.css'; // Don't forget to link the CSS file for styling

const FooterPage = () => 
  { 
    const [email ,setEmail] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
  return (
    <>
    <footer>
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h3>About Veyra</h3>
          <p>Your one-stop shop for the latest fashion trends. We offer a wide range of clothing to suit every style and budget. Stay stylish, stay comfortable with Veyra.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#" aria-label="Pinterest">
              <i className="fa fa-pinterest"></i>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Sale</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: support@Veyra.com</li>
            <li>Phone: +1 800 123 4567</li>
            <li>Address: 123 Fashion St, New York, NY</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <p>Get the latest fashion updates, deals, and more directly in your inbox!</p>
          <input type="email" onChange={handleEmailChange} placeholder="Enter your email" />
          <button className='button-signin-footer'><Link className="btn-signin-footer" to={email?`/signup/${email}`:'/signup'}>Subscribe</Link></button>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2025 Veyra. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  );
};

export default FooterPage;
 
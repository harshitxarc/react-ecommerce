import React from 'react';
import './About.css';
import FooterPage from '../component/FooterPage';

function About() {
  return (
    <>
      {/* Hero Banner */}
      <section id='About-page'>
        <section className="about-header"
          style={{
            backgroundImage: "url('About/About-Page-Header.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <h2>#About_Us</h2>
          <p>Discover who we are and what makes us different.</p>
        </section>

        {/* About Info */}
        <section className="about-info">
          <img src="About/a6.png" alt="Veyra Store" />
          <div>
            <h3>Our Story</h3>
            <p>
              Veyra was founded with a vision to provide premium fashion that's both
              stylish and accessible. From casual wear to statement pieces, we believe
              fashion is a form of self-expression and should empower every individual.
            </p>
            <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
              We blend modern trends with timeless design to ensure every collection
              stands out.
            </marquee>
          </div>
        </section>

        {/* Features / Highlights */}
        <section id="about-features">
          <div className="About-feature-box">
            <img src="/Features/f1.png" alt="Feature 1 Icon" />
            <h6>Secure and Reliable</h6>
          </div>

          <div className="About-feature-box">
            <img src="/Features/f2.png" alt="Feature 2 Icon" />
            <h6>Fast Performance</h6>
          </div>

          <div className="About-feature-box">
            <img src="/Features/f3.png" alt="Feature 3 Icon" />
            <h6>Save Money</h6>
          </div>

          <div className="About-feature-box">
            <img src="/Features/f5.png" alt="Feature 5 Icon" />
            <h6>Happy Sell</h6>
          </div>

          <div className="About-feature-box">
            <img src="/Features/f6.png" alt="Feature 5 Icon" />
            <h6>24/7 Customer Support</h6>
          </div>
        </section>


        {/* Team */}
        <section className="about-team">
          <h3>Meet Our Team</h3>
          <div className="team-container">
            <div className="team-member">
              <img src="Contact/1.png" alt="Team Member" />
              <h5>John Doe</h5>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="Contact/2.png" alt="Team Member" />
              <h5>Jane Smith</h5>
              <p>Creative Director</p>
            </div>
            <div className="team-member">
              <img src="Contact/3.png" alt="Team Member" />
              <h5>Michael Lee</h5>
              <p>Operations Head</p>
            </div>
          </div>
        </section>
      </section>
      <FooterPage />
    </>
  );
}

export default About;

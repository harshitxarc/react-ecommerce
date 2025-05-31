import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
  const [status, setStatus] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setStatus(!!token); // shorthand for setting true/false based on token presence
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <section className="nav-bar-header">
      <div className="nav-bar-logo">
        <NavLink to="/">
          <img 
            src="Veyra_Logo.png" 
            width="180px" 
            className="logo" 
            alt="Veyra Logo" 
            draggable={false}
            style={{ userSelect: 'none', pointerEvents: 'auto' }}
            onContextMenu={e => e.preventDefault()}
          />
        </NavLink>
      </div>

      {/* Hamburger Menu Button */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav>
        <ul className={`Nav-Bar-links ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-house"></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-cart-shopping"></i> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-blog"></i> Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-info-circle"></i> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-phone"></i> Contact
            </NavLink>
          </li>
          <li id="lg-bag">
            <NavLink to="/cart" onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-bag-shopping"></i> Cart
            </NavLink>
          </li>

          {status ? (
            <li>
              <i
                id="signin"
                className="fa-solid fa-arrow-right-from-bracket"
                onClick={handleLogout}
              ></i> Logout
            </li>
          ) : (
            <li id="lg-bag">
              <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                <i className="fa-solid fa-user"></i> Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </section>
    </>
  );
}

export default NavBar;

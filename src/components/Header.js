import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo" onClick={closeMenu}>
            <h1>Future Labs</h1>
          </Link>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
            <Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link>
            <Link to="/portfolio" className="nav-link" onClick={closeMenu}>Portfolio</Link>
            <Link to="/blog" className="nav-link" onClick={closeMenu}>Blog</Link>
            <Link to="/careers" className="nav-link" onClick={closeMenu}>Careers</Link>
            <Link to="/contact" className="nav-link nav-link-cta" onClick={closeMenu}>Contact Us</Link>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

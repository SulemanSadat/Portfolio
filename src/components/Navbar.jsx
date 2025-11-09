import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };


  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="navbar">
      <div className="navbar-content">
        {/* Logo */}
        <a href="/en#" className="navbar-logo-link" onClick={handleNavClick}>
          <img src={logo} alt="Suleman Sadat" className="navbar-logo" />
         
        </a>

   
        <button
          className={`hamburger-button ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

     
        <nav className={`navigation ${isMobileMenuOpen ? "open" : ""}`}>
          <a href="/en#" className="nav-link" onClick={handleNavClick}>
            Home
          </a>
          <a href="/en#about" className="nav-link" onClick={handleNavClick}>
            About
          </a>
          <a href="/en#courses" className="nav-link" onClick={handleNavClick}>
            Courses
          </a>
          <a href="/en/blog" className="nav-link" onClick={handleNavClick}>
            Blog
          </a>
          <a href="/en#contact" className="nav-link" onClick={handleNavClick}>
            Contact
          </a>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={handleNavClick}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
}

export default Navbar;

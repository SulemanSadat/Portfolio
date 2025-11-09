import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

function Navbar({ lang = "en" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").replace("#", "");
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  return (
    <header className="navbar">
      <div className="navbar-content">
        <a href="#home" className="navbar-logo-link" onClick={handleNavClick}>
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
          <a href="#home" className="nav-link" onClick={handleNavClick}>
            Home
          </a>
          <a href="#about" className="nav-link" onClick={handleNavClick}>
            About
          </a>
          <a href="#courses" className="nav-link" onClick={handleNavClick}>
            Courses
          </a>
          <a href="#blog" className="nav-link" onClick={handleNavClick}>
            Blog
          </a>
          <a href="#contact" className="nav-link" onClick={handleNavClick}>
            Contact
          </a>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
}

export default Navbar;

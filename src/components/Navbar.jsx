import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);


  const scrollToId = (id) => {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSectionClick = (e) => {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href"); // like "#about"
    const targetId = href?.startsWith("#") ? href.slice(1) : "";

    setIsMobileMenuOpen(false);

  
    if (location.pathname !== "/") {
      navigate("/");


      setTimeout(() => scrollToId(targetId), 0);
      return;
    }

    scrollToId(targetId);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  
  useEffect(() => {
    if (location.pathname !== "/") return;
    if (!location.hash) return;

    const id = location.hash.slice(1);
    if (!id) return;

    setTimeout(() => scrollToId(id), 0);
  }, [location.pathname, location.hash]);

  return (
    <header className="navbar">
      <div className="navbar-content">
        <a href="#home" className="navbar-logo-link" onClick={handleSectionClick}>
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
          <a href="#home" className="nav-link" onClick={handleSectionClick}>
            Home
          </a>
          <a href="#portfolio" className="nav-link" onClick={handleSectionClick}>
            Portfolio
          </a>
          <a href="#pricing" className="nav-link" onClick={handleSectionClick}>
            Pricing
          </a>

          
          <Link
            to="/blog"
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>

          <a href="#contact" className="nav-link" onClick={handleSectionClick}>
            Contact
          </a>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}

export default Navbar;

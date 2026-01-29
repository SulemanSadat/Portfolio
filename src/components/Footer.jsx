import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css';
import { FaX, FaXTwitter } from 'react-icons/fa6';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: FaLinkedin, 
      href: 'https://www.linkedin.com/in/suleman-sadat/', 
      label: 'LinkedIn',
      color: '#0A66C2'
    },
    { 
      icon: FaXTwitter, 
      href: 'https://www.x.com/suleman_sadat_', 
      label: 'Twitter',
      color: '#1DA1F2'
    },
    { 
      icon: FaInstagram, 
      href: 'https://www.instagram.com/suleman_sadat_', 
      label: 'Instagram',
      color: '#ff00eeff'
    },
      { 
      icon: FaGithub, 
      href: 'https://www.github.com/SulemanSadat', 
      label: 'GitHub',
      color: '#333'
    },
    
    
  ];

  const navigationLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand-section">
            <div className="footer-brand">
              <h2 className="footer-brand-name" onClick={scrollToTop}>
                Suleman Sadat
              </h2>
              <p className="footer-brand-tagline">
                Software engineer with 4+ years of experience building production-ready web applications for international clients. Experienced in remote collaboration across time zones using tools like GitHub, Slack, and Notion. Open to fully remote roles with global teams and excited to build impactful products. Open to collaboration and interviews.
              </p>
            </div>
          </div>

          <div className="footer-navigation-section">
            <h3 className="footer-section-title">Quick Links</h3>
            <nav className="footer-nav">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="footer-nav-link"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-social-section">
            <h3 className="footer-section-title">Connect</h3>
            <div className="footer-social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="footer-social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p className="copyright-text">
              © {currentYear} Suleman Sadat. All rights reserved.
            </p>
          </div>

          {/* <div className="footer-back-to-top">
            <button
              onClick={scrollToTop}
              className="back-to-top-button"
              aria-label="Back to top"
            >
              <span>↑</span>
            </button>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

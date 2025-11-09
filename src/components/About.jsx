import React from 'react';
import '../styles/About.css';
import suleman1 from '../assets/sulemansadat.jpg';
import suleman2 from '../assets/2012SulemanSadat.jpg';
import skills from '../assets/Me.jpg';

import { SiTiktok, SiShopify, SiAmazon, SiEtsy, SiEbay, SiPaypal, SiAliexpress, SiYoutube, SiChatbot, SiInstagram } from 'react-icons/si';

function About() {
  return (
    <div className="about-container" id='about'>
      <div className="about-main-section">
        <div className="about-content-wrapper">
          <div className="about-images-section">
            <div className="image-container">
              <div className="gradient-overlay"></div>
              <div className="blur-decoration-1"></div>
              <div className="blur-decoration-2"></div>
              <img 
                src={suleman1}
                alt="Suleman Sadat Speaking" 
                className="about-image top-image"
              />
              <img 
                 src={suleman2} 
                alt="Suleman 2012" 
                className="about-image bottom-image"
              />
            </div>
          </div>

          <div className="about-text-section">
            <div className="about-header">
              <div className="about-title-wrapper">
                <h1 className="about-title" >About</h1>
                <h1 className="journey-title">My Journey</h1>
              </div>
              <p className="about-subtitle">
                Hey! 👋 I’m Suleman Sadat, a Digital Product Creator passionate about transforming ideas into intuitive, user-friendly solutions.
               Today, I focus on building Digital Products that make a meaningful impact, combining technical expertise with strategic vision to solve complex challenges in 2026.
              </p>
            </div>

            <div className="story-section">
              <h2 className="story-title">My Story</h2>
              <p className="story-paragraph">
                  With a strong foundation in Computer Science, I began my journey in graphic design and expanded into full-stack development, allowing me to build digital products that solve real-world problems effectively.

            I'm excited to mentor others who are just starting their creative journey and help them avoid the mistakes I made early on.
            Over the years, I’ve honed skills in creating content and full-stack development.
              </p>
              {/* <p className="story-paragraph">
                
              </p> */}
            </div>

            <div className="about-buttons">
              {/* <button className="download-resume-btn">
                Download Resume
              </button> */}
              <a  href='#' className="view-portfolio-btn">
                View Portfolio
              </a>
            </div>
          </div>
        </div>

        <div className="expertise-section">
          <div className="expertise-header">
            <h2 className="expertise-title">Expertise & Skills</h2>
            <p className="expertise-subtitle">
              A comprehensive toolkit built through years of hands-on experience and continuous learning.
            </p>
          </div>
        </div>

        <div className="profile-showcase">
          <div className="profile-circle-container">
            <div className="profile-glow"></div>
            <div className="profile-border">
              <div className="profile-inner">
                <img 
                  src={skills} 
                  alt="Professional portrait" 
                  className="profile-photo"
                />
              </div>
            </div>

            <div className="social-icon tiktok-icon">
              <SiTiktok />
            </div>

            <div className="social-icon behance-icon">
              <SiShopify />
            </div>

            <div className="social-icon amazon-icon">
              <SiAmazon />
            </div>
                
          
            <div className="social-icon youtube-icon">
              <SiYoutube />
            </div>

               <div className="social-icon instagram-icon">
              <SiInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

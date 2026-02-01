import React from 'react';
import '../styles/About.css';
import suleman1 from '../assets/sulemansadat.jpg';
// import suleman2 from '../assets/2012SulemanSadat.jpg';
import skills from '../assets/Me.jpg';
import CV from '../assets/Suleman_Sadat.pdf';
import { toast } from 'react-hot-toast';

import { SiTiktok, SiShopify, SiAmazon, SiEtsy, SiEbay, SiPaypal, SiAliexpress, SiYoutube, SiChatbot, SiInstagram, SiHtml5, SiPython, SiReact, SiPhp, SiMysql, SiFigma, SiTradingview, SiWordpress, SiOpenai } from 'react-icons/si';

function About() {
  const handleComingSoon = () => {
    toast('⏳ Downloading…', {
      duration: 1800,
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };
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
              {/* <img 
                 src={suleman2} 
                alt="Suleman 2012" 
                className="about-image bottom-image"
              /> */}
            </div>
          </div>

          <div className="about-text-section">
            <div className="about-header">
              <div className="about-title-wrapper">
                <h1 className="about-title" >About</h1>
                <h1 className="journey-title">My Journey</h1>
              </div>
              <p className="about-subtitle">
                Hey! 👋 I’m Suleman Sadat, a Software engineer with 4+ years of experience building production-ready web applications for international clients. Experienced in remote collaboration across time zones using tools like GitHub, Slack, and Notion. Open to fully remote roles with global teams and excited to build impactful products. Open to collaboration and interviews.
              </p>
            </div>

            {/* <div className="story-section">
              <h2 className="story-title">My Story</h2>
              <p className="story-paragraph">
                  With a strong foundation in Computer Science, I began my journey in graphic design and expanded into full-stack development, allowing me to build digital products that solve real-world problems effectively.

            I'm excited to mentor others who are just starting their creative journey and help them avoid the mistakes I made early on.
            Over the years, I’ve honed skills in creating content and full-stack development.
              </p>
            
            </div> */}

            <div className="about-buttons">
                <a
                  href={CV}
                  download
                  className="download-resume-btn" onClick={handleComingSoon}
                >
                  Download Resume
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
              <SiReact />
            </div>

            <div className="social-icon behance-icon">
              <SiPython />
            </div>

            <div className="social-icon amazon-icon">
              <SiOpenai />
            </div>
                
          
            <div className="social-icon youtube-icon">
              <SiFigma />
            </div>

               <div className="social-icon instagram-icon">
              <SiMysql />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

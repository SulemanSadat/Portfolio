import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profile from "../assets/profile.png";
import '../styles/Home.css';

function Home() {

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setTimeout(() => {
          const target = document.getElementById(hash);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <main className="main-content" id="home">
      <img
        src={profile}
        alt="Suleman Sadat Profile"
        className="profile-image"
      />

      <div className="content-section">
        <div className="text-content">

         
          <div className="open-to-work">
            <span className="status-dot"></span>
            Open to Work
          </div>

          <h1 className="main-heading">
            I'm{' '}
            <span className="highlight-name">
              <Typewriter
                words={[
                  'Suleman Sadat',
                  'Full Stack Developer',
                  'AI Software Engineer',
                  'Ecommerce Expert',
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={30}
                deleteSpeed={20}
                delaySpeed={1200}
              />
            </span>
          </h1>

          <p className="description">
          building production-ready web applications for international clients.
          </p>
        </div>

        <div className="button-group">
          <a href="#contact" className="secondary-button">Get In Touch</a>
        </div>
      </div>
    </main>
  );
}

export default Home;

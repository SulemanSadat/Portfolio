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
            console.warn(`Section not found: #${hash}`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            alert(`Section "${hash}" not found.`);
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
          <h1 className="main-heading">
            I'm{' '}
            <span style={{ color: '#915EFF', fontWeight: 'bold' }}>
              <Typewriter
                words={[
                  'Suleman Sadat',
                  'an Entrepreneur',
                  'Full Stack Developer',
                  'Ecommerce Expert',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={30}
                deleteSpeed={20}
                delaySpeed={1200}
              />
            </span>
          </h1>

          <p className="description">
            Transforming ideas into reality through innovative solutions and strategic thinking. 
            Building the future, one venture at a time.
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

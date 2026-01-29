import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDesktop, FaMobile } from 'react-icons/fa';
import '../styles/Portfolio.css';
import cms from '../assets/cms.png';
import bot from '../assets/bot.jpg';
import game from '../assets/game.jpg';


function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    // {
    //   id: 1,
    //   title: 'E-commerce Platform',
    //   description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
    //   image: '#A358FF',
    //   category: 'web',
    //   technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    //   github: '#',
    //   live: '#',
    //   featured: true
    // },
    // {
    //   id: 2,
    //   title: 'Mobile Banking App',
    //   description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
    //   image: '#2B9E44',
    //   category: 'mobile',
    //   technologies: ['React Native', 'Firebase', 'Redux', 'JWT'],
    //   github: '#',
    //   live: '#',
    //   featured: true
    // },
    {
      id: 3,
      title: 'Student Management Platform',
      description: 'Custom Platform for managing student records, attendance, and grades.',
      image: cms,
      category: 'web',
      technologies: ['React.js', 'PHP', 'MySQL', 'PHP', 'Figma'],
      github: '#',
      live: '#',
      featured: false
    },
    // {
    //   id: 4,
    //   title: 'AI-Powered Analytics Dashboard',
    //   description: 'Real-time analytics dashboard with machine learning insights and data visualization.',
    //   image: '#D946EF',
    //   category: 'web',
    //   technologies: ['Python', 'React', 'TensorFlow', 'D3.js'],
    //   github: '#',
    //   live: '#',
    //   featured: true
    // },
     {
      id: 5,
      title: 'Game web app',
      description: 'Modern Game web app with interactive animations and responsive design.',
       image: game,
      category: 'web',
      technologies: ['React.js', 'Adobe XD', 'Figma', 'Principle'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Telegram Chatbot',
      description: 'Custom Telegram Chatbot with real-time messaging with AI integration.',
       image: bot,
      category: 'mobile',
      technologies: ['Telegram API', 'PHP', 'Ngrok', 'BotFather', 'MySQL', 'OpenAI API'],
      github: '#',
      live: '#',
      featured: false
    },
   
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: FaDesktop },
    { key: 'web', label: 'Web Apps', icon: FaCode },
    { key: 'mobile', label: 'Mobile Apps', icon: FaMobile },
    { key: 'design', label: 'UI/UX Design', icon: FaDesktop }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);


  return (
    <div className="portfolio-container" id="portfolio">
      <div className="portfolio-content">
        <div className="portfolio-header">
          <h1 className="portfolio-title">My Portfolio</h1>
          <p className="portfolio-subtitle">
            Explore my latest projects and creative work. Each project represents a unique challenge solved with innovative thinking and cutting-edge technology.
          </p>
        </div>

        <div className="all-projects-section">
          <h2 className="section-title">All Projects</h2>
          
          <div className="filter-tabs">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`filter-tab ${activeFilter === filter.key ? 'active' : ''}`}
              >
                <filter.icon />
                <span>{filter.label}</span>
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div 
                  className="project-image" 
                   style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} className="project-link" aria-label="View GitHub">
                        <FaGithub />
                      </a>
                      <a href={project.live} className="project-link" aria-label="View Live Site">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="portfolio-cta">
          <h3 className="cta-title">Interested in working together?</h3>
          <p className="cta-description">
            Let's discuss your project and create something amazing together.
          </p>
          <a href="#contact" className="cta-button">
            Get In Touch
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Portfolio;

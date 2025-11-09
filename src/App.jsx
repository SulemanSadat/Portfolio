import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Toaster } from 'react-hot-toast';


import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import CourseHighlights from './components/CourseHighlights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Blog from './pages/Blog';


import './App.css';
import Testimonials from './components/Testimonials';

function App({ lang = 'en' }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  document.documentElement.dir = 'ltr'; 
  }, [lang]);

  return (
    <div className="portfolio-container">
      <div className="background-effects">
        <div className="blur-effect-1"></div>
        <div className="blur-effect-2"></div>
        <div className="blur-effect-3"></div>
      </div>

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              {/* <Portfolio /> */}
              <CourseHighlights />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/courses" element={<CourseHighlights />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;

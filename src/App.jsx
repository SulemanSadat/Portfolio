import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import CourseHighlights from "./components/CourseHighlights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Blog from "./pages/Blog";
import Testimonials from "./components/Testimonials";

const HomePage = () => (
  <>
    <Home />
    <About />
    <Portfolio />
    <CourseHighlights />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

function App({ lang = "en" }) {
  const { i18n } = useTranslation();
  const location = useLocation();

  // Set language and direction
  useEffect(() => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang, i18n]);

  // Smooth scroll for hash links
  useEffect(() => {
    let hash = location.hash; // e.g., "#/en/about" or "#about"
    if (!hash) return;

    // Remove /en or /fa if present
    hash = hash.replace(/^#\/(en|fa)/, "");

    if (hash === "" || hash === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(hash.replace("#", ""));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="portfolio-container">
      <div className="background-effects">
        <div className="blur-effect-1"></div>
        <div className="blur-effect-2"></div>
        <div className="blur-effect-3"></div>
      </div>

      <Navbar lang={lang} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="courses" element={<CourseHighlights />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;

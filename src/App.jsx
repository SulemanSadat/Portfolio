import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Pricing from "./pages/Pricing";
import CourseHighlights from "./components/CourseHighlights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Blog from "./pages/Blog";
import Testimonials from "./components/Testimonials";

const HomePage = () => (
  <>
    <Home />
    <Testimonials />
    <Portfolio />
    <Pricing />
    <About />
    <Contact />
    {/* <CourseHighlights /> */}
    <Footer />
  </>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash; // e.g. "#about"
    if (!hash || hash === "#") return;

    const id = hash.slice(1);
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <div className="portfolio-container">
      <div className="background-effects">
        <div className="blur-effect-1"></div>
        <div className="blur-effect-2"></div>
        <div className="blur-effect-3"></div>
      </div>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
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

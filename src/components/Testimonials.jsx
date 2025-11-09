import React, { useState, useEffect } from "react";
import "../styles/Testimonials.css";
import Helmand from "../assets/Customers/Helmand Photo.jpg";
import BilalKakar from "../assets/Customers/BilalKakar.jpg";
import AzizRastegari from "../assets/Customers/AzizRastegari.jpg";
// import Asadullah from "../assets/Customers/Asadullah.jpg";
import Mahdi from "../assets/Customers/Mahdi.jpg";
import FacebookEmbed from "../components/FacebookEmbed";



const testimonials = [
  {
    id: 1,
    name: "Bilal Kakar",
    role: "CEO, MobiMix",
    rating: 5,
    text: "Sadat Sahib is a hardworking and creative content creator who always delivers professional results. Highly recommended!",
    avatar: BilalKakar,
  },
   {
    id: 3,
    name: "M. Aziz Rastegari",
    role: "Head of Computer Science Department, Avicenna University",
    rating: 5,
    text: "Suleman has great talent and strong skills as a developer, I’m proud to have recognized his hard work and excellence.",
    avatar: AzizRastegari,
  },
  {
    id: 2,
    name: "Helmand Ahmadzai",
    role: "Founder, National Oxford",
    rating: 5,
    text: "Suleman is a highly skilled and reliable Full Stack Developer who consistently delivers outstanding results. Highly recommended!",
    avatar: Helmand,
  },
     {
    id: 4,
    name: "Mahdi Rezaei",
    role: "Freelancer, UpWork",
    rating: 5,
    text: "Working with Suleman was truly inspiring,his professionalism and creativity make him highly recommended!",
    avatar: Mahdi,
  },
 
  // {
  //   id: 5,
  //   name: "Asadullah Mujadadi",
  //   role: "Manager, Omair Prime",
  //   rating: 5,
  //   text: "العمل مع سليمان أظهر لي تفكيره التقني القوي والتزامه بتقديم الجودة — إنه مهندس محترف بحق.",
  //   avatar: Asadullah,
  // },

];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

 
  const renderStars = (count) =>
    Array.from({ length: count }).map((_, i) => (
      <span key={i} className="star">★</span>
    ));

 return (
  <div className="dark-carousel-wrapper">
    <h2 className="carousel-heading" id="testimonials">Testimonials</h2>
    <p className="carousel-subtitle">
      Hear what professionals and collaborators have to say about working with me.
    </p>

    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {testimonials.map((t) => (
          <div key={t.id} className="carousel-slide">
            <div className="testimonial-card">
              <div className="testimonial-profile">
                <img src={t.avatar} alt={t.name} />
                <div className="profile-info">
                 <h4 className="verified-name">{t.name}</h4>
                    <p>{t.role}</p>
                    <div className="stars">{renderStars(t.rating)}</div>
                  </div>
                </div>
                <p className="testimonial-text">“{t.text}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="carousel-dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
      <br />
    
    </div>
  );
}

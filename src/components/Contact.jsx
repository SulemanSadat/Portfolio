import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Contact.css';
import emailjs from "emailjs-com";
import toast, { Toaster } from 'react-hot-toast';



function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

   
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (validateForm()) {
    emailjs
      .send(
        "service_7070vhc", 
        "template_woi80rn",   
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        "crN-_tAtx6kqlQUWY"   
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message.");
        }
      );
  }
};


  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub', color: '#333' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: '#0A66C2' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: '#E4405F' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: '#1DA1F2' }
  ];

  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Let's discuss your next project. I'm always excited to connect with fellow new clients, creators and entrepreneurs.
          </p>
        </div>

        <div className="contact-main">
          <div className="contact-info-section">
            <div className="contact-info-card">
              <h2 className="contact-info-title">Contact Information</h2>
              <p className="contact-info-description">
                Feel free to reach out through any of the following channels.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-detail-content">
                    <h3>Email</h3>
                    <p>contact@sulemansadat.com</p>
                  </div>
                </div>

                {/* <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-detail-content">
                    <h3>Location</h3>
                    <p>San Francisco, CA</p>
                  </div>
                </div> */}
              </div>

              <div className="social-media-section">
                <h3 className="social-media-title">Follow Me</h3>
                <div className="social-media-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="social-media-link"
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
          </div>

          <div className="contact-form-section">
            <div className="contact-form-card">
              <h2 className="form-title">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                      placeholder="Your full name"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`form-input ${errors.subject ? 'form-input-error' : ''}`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`form-textarea ${errors.message ? 'form-input-error' : ''}`}
                    placeholder="Tell me about your project..."
                    rows="6"
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
            <Toaster
        position="top-center"
        toastOptions={{
          duration:3500,
          style: {
            background: '#333',
            color: '#fff',
            borderRadius: '8px',
            padding: '12px 16px',
          },
        }}
      />

    </div>
  );
}

export default Contact;

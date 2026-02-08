import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaInstagram,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_pbzmicu",
        "template_3rv7u4j",
        formData,
        "N4H-xoVDjgz_NcbDJ"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Message sending failed. Please try again.");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <style>{`
/* ===== PREMIUM CONTACT PAGE DESIGN ===== */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}

html, body {
  margin: 0;
  padding: 0;
  background: #0a0f2c;
}

.contact-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0f2c 0%, #1a1f3a 50%, #0a0f2c 100%);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.contact-page::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(96, 165, 250, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 60s linear infinite;
  pointer-events: none;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.floating-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.25;
  animation: float 20s ease-in-out infinite;
  pointer-events: none;
}

.orb-1 {
  width: 450px;
  height: 450px;
  background: #60a5fa;
  top: 10%;
  left: -5%;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: #3b82f6;
  bottom: 10%;
  right: -5%;
  animation-delay: 7s;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: #8b5cf6;
  top: 50%;
  right: 20%;
  animation-delay: 3.5s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(40px, -40px); }
  66% { transform: translate(-40px, 40px); }
}

.contact-container {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.contact-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(135deg, #93c5fd 0%, #60a5fa 50%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #60a5fa, #3b82f6);
  border-radius: 2px;
}

.section-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #cbd5e1;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 2rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.glass-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2.5rem;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #60a5fa, #3b82f6, #8b5cf6);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.glass-card:hover::before {
  opacity: 1;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(96, 165, 250, 0.4);
  transform: translateY(-10px);
  box-shadow: 
    0 30px 80px rgba(59, 130, 246, 0.4),
    0 0 0 1px rgba(96, 165, 250, 0.3);
}

.card-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.8rem;
}

.card-subtitle {
  font-size: 0.95rem;
  color: #94a3b8;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  color: #e5e7eb;
  font-weight: 500;
  font-size: 0.95rem;
  margin-bottom: 0.6rem;
  letter-spacing: 0.3px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  color: #ffffff;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
  outline: none;
  resize: vertical;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(203, 213, 225, 0.5);
}

.form-input:focus,
.form-textarea:focus {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(96, 165, 250, 0.5);
  box-shadow: 
    0 0 0 3px rgba(96, 165, 250, 0.1),
    0 4px 20px rgba(96, 165, 250, 0.2);
}

.form-textarea {
  min-height: 150px;
}

.send-btn {
  width: 100%;
  padding: 1.1rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 10px 30px rgba(96, 165, 250, 0.4),
    0 0 20px rgba(96, 165, 250, 0.2);
  position: relative;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.send-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
}

.send-btn:hover::before {
  left: 100%;
}

.send-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 
    0 15px 40px rgba(96, 165, 250, 0.6),
    0 0 30px rgba(96, 165, 250, 0.4);
}

.send-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.25rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid #3b82f6;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.info-item:hover {
  background: rgba(59, 130, 246, 0.1);
  transform: translateX(8px);
}

.info-icon {
  flex-shrink: 0;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(59, 130, 246, 0.2));
  border-radius: 12px;
  color: #60a5fa;
  font-size: 1.3rem;
  border: 1px solid rgba(96, 165, 250, 0.3);
}

.info-content strong {
  display: block;
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 0.3rem;
  font-size: 1rem;
}

.info-content p {
  color: #cbd5e1;
  margin: 0;
  font-size: 0.95rem;
  word-wrap: break-word;
  word-break: break-word;
}

.social-section {
  text-align: center;
  margin-top: 1.5rem;
}

.social-section p {
  color: #94a3b8;
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(59, 130, 246, 0.2));
  border: 1px solid rgba(96, 165, 250, 0.3);
  border-radius: 50%;
  color: #60a5fa;
  font-size: 1.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
}

.social-link:hover {
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.3), rgba(59, 130, 246, 0.3));
  color: #93c5fd;
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 10px 30px rgba(96, 165, 250, 0.5);
}

/* ===== RESPONSIVE DESIGN ===== */

@media (max-width: 768px) {
  .contact-page {
    padding: 4rem 0;
  }

  .contact-header {
    margin-bottom: 3rem;
  }

  .section-title::after {
    width: 80px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .glass-card {
    padding: 2rem 1.5rem;
  }

  .info-item {
    padding: 1rem;
  }

  .info-icon {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }

  .social-link {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }

  .orb-1, .orb-2, .orb-3 {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 576px) {
  .contact-page {
    padding: 3rem 0;
  }

  .glass-card {
    padding: 1.75rem 1.25rem;
    border-radius: 20px;
  }

  .card-title {
    font-size: 1.4rem;
  }

  .form-input,
  .form-textarea {
    padding: 0.9rem 1rem;
    font-size: 0.95rem;
  }

  .send-btn {
    padding: 1rem;
    font-size: 1rem;
  }

  .info-content strong {
    font-size: 0.95rem;
  }

  .info-content p {
    font-size: 0.85rem;
  }
}
      `}</style>

      <div className="contact-page">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>

        <div className="contact-container">
          <div className="contact-header">
            <h2 className="section-title" data-aos="fade-up">
              Get In Touch
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
              Ready to start your learning journey? Contact us today and transform
              your career with expert guidance.
            </p>
          </div>

          <div className="contact-grid">
            {/* Form Card */}
            <div className="glass-card" data-aos="fade-right">
              <h4 className="card-title">Send us a Message</h4>
              <p className="card-subtitle">
                We'll get back to you within 24 hours
              </p>

              <form onSubmit={sendEmail}>
                <div className="form-group">
                  <label className="form-label">Your Full Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter your name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="your.email@example.com"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Tell us about your learning goals..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button 
                  className="send-btn" 
                  type="submit"
                  disabled={isLoading}
                >
                  <FaPaperPlane />
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Info Card */}
            <div data-aos="fade-left">
              <div className="glass-card">
                <h4 className="card-title">Contact Information</h4>

                <div className="info-item" data-aos="fade-left" data-aos-delay="100">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="info-content">
                    <strong>Email</strong>
                    <p>WingsOfChange@gmail.com</p>
                  </div>
                </div>

                <div className="info-item" data-aos="fade-left" data-aos-delay="200">
                  <div className="info-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="info-content">
                    <strong>Phone</strong>
                    <p>+91 9872946783</p>
                  </div>
                </div>

                <div className="info-item" data-aos="fade-left" data-aos-delay="300">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-content">
                    <strong>Visit Us</strong>
                    <p>Delhi, India</p>
                  </div>
                </div>
              </div>

              {/* Social Card */}
              <div className="glass-card" style={{ marginTop: '2rem' }} data-aos="fade-left" data-aos-delay="400">
                <h4 className="card-title">Follow Us</h4>
                <div className="social-section">
                  <p>Connect with us on social media</p>
                  <div className="social-icons">
                    <a
                      href="https://www.instagram.com/sksjtrust"
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
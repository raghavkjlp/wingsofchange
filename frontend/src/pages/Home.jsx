import React, { useEffect } from "react";
import Hero from "../components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);
  
  return (
    <>
      <style>{`
/* ===== PREMIUM HOME PAGE DESIGN ===== */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}

body {
  background: linear-gradient(135deg, #0a0f2c 0%, #1a1f3a 50%, #0a0f2c 100%);
  overflow-x: hidden;
}

/* ===== UTILITY CLASSES ===== */

.py-6 {
  padding: 6rem 0;
}

.section-title {
  font-weight: 800;
  font-size: clamp(2rem, 5vw, 2.8rem);
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #93c5fd 100%);
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
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #60a5fa, #3b82f6);
  border-radius: 2px;
}

/* ===== INTRO SECTION ===== */

.intro-section {
  position: relative;
  background: linear-gradient(180deg, rgba(10, 15, 44, 0.9) 0%, rgba(26, 31, 58, 0.8) 100%);
  padding: 5rem 0;
  overflow: hidden;
}

.intro-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 50%, rgba(96, 165, 250, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.06) 0%, transparent 50%);
  pointer-events: none;
}

.intro-content {
  position: relative;
  z-index: 2;
  max-width: 950px;
  margin: 0 auto;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
}

.intro-content:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(96, 165, 250, 0.3);
  box-shadow: 0 25px 80px rgba(96, 165, 250, 0.2);
  transform: translateY(-5px);
}

.intro-text {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  line-height: 1.9;
  color: #e5e7eb;
  text-align: center;
}

.intro-text strong {
  color: #60a5fa;
  font-weight: 600;
  position: relative;
}

.intro-highlight {
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(59, 130, 246, 0.2));
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  border: 1px solid rgba(96, 165, 250, 0.3);
}

/* ===== ABOUT SECTION ===== */

.about-section {
  position: relative;
  background: linear-gradient(180deg, #0a0f2c 0%, #1a1f3a 100%);
  padding: 6rem 0;
  overflow: hidden;
}

.about-section::before {
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
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

.about-image-wrapper {
  position: relative;
  display: inline-block;
}

.about-image-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(96, 165, 250, 0.3), transparent 70%);
  transform: translate(-50%, -50%);
  filter: blur(40px);
  animation: pulseGlow 4s ease-in-out infinite;
  z-index: 0;
}

.about-img {
  position: relative;
  max-width: 100%;
  width: 420px;
  border-radius: 24px;
  box-shadow: 
    0 25px 80px rgba(96, 165, 250, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.about-img:hover {
  transform: scale(1.05) rotate(2deg);
  box-shadow: 
    0 30px 100px rgba(96, 165, 250, 0.6),
    0 0 0 1px rgba(96, 165, 250, 0.5);
}

.about-content {
  position: relative;
  z-index: 2;
}

.about-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #cbd5e1;
  margin-bottom: 1.5rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin-top: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background: rgba(130, 138, 161, 0.3);    
  border-left: 3px solid #3b82f6;  
  border-radius: 8px;
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(30, 58, 138, 0.5);
  transform: translateX(10px);
}

.feature-icon {
  width: 24px;
  height: 24px;
  color: #60a5fa;
  flex-shrink: 0;
}

/* ===== SERVICES SECTION ===== */

.services-section {
  position: relative;
  background: linear-gradient(180deg, #1a1f3a 0%, #0a0f2c 100%);
  padding: 6rem 0;
  overflow: hidden;
}

.services-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2360a5fa' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.3;
  pointer-events: none;
}

.glass-card {
  position: relative;
  height: 100%;
  padding: 3rem 2rem;
  text-align: center;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
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
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(96, 165, 250, 0.4);
  transform: translateY(-15px) scale(1.03);
  box-shadow: 
    0 30px 80px rgba(59, 130, 246, 0.4),
    0 0 0 1px rgba(96, 165, 250, 0.3);
}

.card-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(59, 130, 246, 0.2));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(96, 165, 250, 0.3);
  transition: all 0.4s ease;
}

.glass-card:hover .card-icon {
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.3), rgba(59, 130, 246, 0.3));
  transform: rotateY(360deg);
  box-shadow: 0 10px 30px rgba(96, 165, 250, 0.4);
}

.card-icon svg {
  width: 40px;
  height: 40px;
  color: #60a5fa;
}

.glass-card h5 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
}

.glass-card p {
  color: #cbd5e1;
  font-size: 1.05rem;
  line-height: 1.7;
}

/* ===== VALUES SECTION ===== */

.values-section {
  position: relative;
  background: linear-gradient(135deg, #0a0f2c 0%, #1e293b 50%, #0a0f2c 100%);
  padding: 6rem 0;
  overflow: hidden;
}

.values-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.values-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 3rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
}

.values-line {
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-weight: 700;
  letter-spacing: 3px;
  background: linear-gradient(135deg, #93c5fd 0%, #60a5fa 50%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 2rem 0;
  position: relative;
  display: inline-block;
}

.values-separator {
  display: inline-block;
  margin: 0 1rem;
  color: #60a5fa;
  font-size: 1.5rem;
}

.values-description {
  font-size: 1.15rem;
  color: #cbd5e1;
  line-height: 1.8;
  margin-top: 2rem;
}

/* ===== CTA SECTION ===== */

.cta-section {
  position: relative;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%);
  padding: 6rem 0;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: 
    radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px, 80px 80px;
  background-position: 0 0, 40px 40px;
  animation: gridMove 40s linear infinite;
  pointer-events: none;
}

.cta-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 50%, rgba(96, 165, 250, 0.2) 0%, transparent 50%);
  pointer-events: none;
}

.cta-content {
  position: relative;
  z-index: 2;
}

.cta-content h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.cta-content p {
  font-size: 1.2rem;
  color: #e0f2fe;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.glow-btn {
  position: relative;
  padding: 1.1rem 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  border: none;
  border-radius: 50px;
  text-decoration: none;
  display: inline-block;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 10px 40px rgba(96, 165, 250, 0.5),
    0 0 20px rgba(96, 165, 250, 0.3);
}

.glow-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.6s ease;
}

.glow-btn:hover::before {
  left: 100%;
}

.glow-btn:hover {
  color: #ffffff;
  transform: translateY(-5px) scale(1.05);
  box-shadow: 
    0 15px 50px rgba(96, 165, 250, 0.7),
    0 0 40px rgba(96, 165, 250, 0.5);
}

.glow-btn-secondary {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: none;
}

.glow-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
}

/* ===== DECORATIVE ELEMENTS ===== */

.floating-element {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.2;
  animation: float 20s ease-in-out infinite;
  pointer-events: none;
}

.floating-element-1 {
  background: #60a5fa;
  top: 10%;
  left: 5%;
  animation-delay: 0s;
}

.floating-element-2 {
  background: #3b82f6;
  bottom: 10%;
  right: 5%;
  animation-delay: 7s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(30px, -30px);
  }
  66% {
    transform: translate(-30px, 30px);
  }
}

/* ===== RESPONSIVE DESIGN ===== */

@media (max-width: 768px) {
  .py-6 {
    padding: 4rem 0;
  }

  .intro-content {
    padding: 2rem;
  }

  .intro-text {
    font-size: 1rem;
  }

  .about-img {
    width: 100%;
    max-width: 350px;
  }

  .glass-card {
    padding: 2rem 1.5rem;
  }

  .values-content {
    padding: 2.5rem 2rem;
  }

  .values-line {
    font-size: 1.4rem;
    letter-spacing: 2px;
  }

  .values-separator {
    margin: 0 0.5rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }

  .cta-content p {
    font-size: 1.05rem;
  }

  .glow-btn {
    padding: 0.9rem 2rem;
    font-size: 1rem;
    width: 100%;
    margin-bottom: 1rem;
  }

  .floating-element {
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 576px) {
  .section-title::after {
    width: 60px;
  }

  .card-icon {
    width: 60px;
    height: 60px;
  }

  .card-icon svg {
    width: 30px;
    height: 30px;
  }
}

/* ===== ACCESSIBILITY ===== */

.glow-btn:focus-visible {
  outline: 3px solid #60a5fa;
  outline-offset: 4px;
}

.glass-card:focus-within {
  border-color: rgba(96, 165, 250, 0.6);
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
}
`}</style>

      <Hero />

      {/* Intro Section */}
      <section className="intro-section">
        <div className="floating-element floating-element-1"></div>
        <div className="container">
          <div className="intro-content" data-aos="fade-up">
            <p className="intro-text">
              Inspired by the sacred life and legacy of{" "}
              <strong className="intro-highlight">Wings of Change</strong>{" "}
              — the saint-soldier who led the Gurdwara Sudhar Lehar — this Trust is founded 
              to keep his spirit of <strong>sewa</strong>, <strong>maryada</strong>, and 
              faith alive.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center" data-aos="zoom-in">
              <div className="about-image-wrapper">
                <div className="about-image-glow"></div>
                <img
                  src="/asset/hero-bg.jpeg"
                  alt="Sardar Kartar Singh Jhabbar"
                  className="about-img img-fluid"
                />
              </div>
            </div>

            <div className="col-lg-6 about-content" data-aos="fade-left">
              <h2 className="section-title">About the Trust</h2>
              <p>
                The Trust supports families devoted to religious service by
                promoting education, discipline, and leadership among the youth.
              </p>
              <p>
                Our mission is to help students grow into educated, responsible,
                and spiritually grounded individuals who can serve their communities
                with dedication and integrity.
              </p>
              
              <ul className="feature-list">
                <li className="feature-item" data-aos="fade-left" data-aos-delay="100">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Educational scholarships for deserving students</span>
                </li>
                <li className="feature-item" data-aos="fade-left" data-aos-delay="200">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Character development rooted in Sikh values</span>
                </li>
                <li className="feature-item" data-aos="fade-left" data-aos-delay="300">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Leadership training and community service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="floating-element floating-element-2"></div>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">
              What We Do
            </h2>
            <p className="text-light opacity-75" data-aos="fade-up" data-aos-delay="100">
              Empowering the next generation through comprehensive support
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                title: "Education Support",
                text: "Comprehensive scholarships and academic resources for deserving students pursuing higher education.",
                icon: (
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
              {
                title: "Faith & Discipline",
                text: "Nurturing spiritual growth and moral character rooted in timeless Sikh principles and values.",
                icon: (
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
              },
              {
                title: "Community Service",
                text: "Promoting selfless service (seva) and developing future leaders committed to making a difference.",
                icon: (
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div className="glass-card">
                  <div className="card-icon">
                    {item.icon}
                  </div>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="values-content text-center" data-aos="zoom-in">
            <h2 className="section-title">Our Core Values</h2>
            <div className="values-line">
              Naam
              <span className="values-separator">•</span>
              Kirat
              <span className="values-separator">•</span>
              Vand Chhakna
            </div>
            <p className="values-description">
              True education is the harmony of knowledge, discipline, and faith.
              We believe in nurturing minds, strengthening character, and 
              building a foundation of spiritual wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center" data-aos="fade-up">
            <h2>Support the Mission</h2>
            <p>
              Your contribution helps build a future grounded in values, education,
              and service. Together, we can empower the next generation.
            </p>

            <div className="mt-4">
              <a href="/donate" className="glow-btn me-3">
                Donate Now
              </a>
              <a href="/contact" className="glow-btn glow-btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
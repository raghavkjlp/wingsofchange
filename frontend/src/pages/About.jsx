import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
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
/* ===== PREMIUM ABOUT PAGE DESIGN ===== */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}

body {
  background: linear-gradient(135deg, #0a0f2c 0%, #1a1f3a 100%);
  overflow-x: hidden;
}

/* ===== HERO SECTION ===== */

.about-hero {
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%);
  overflow: hidden;
  padding: 6rem 0 4rem;
}

.about-hero::before {
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

@keyframes gridMove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

.about-hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.2) 0%, transparent 70%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 1rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: titleSlideDown 1s ease-out;
}

@keyframes titleSlideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: #e0f2fe;
  font-style: italic;
  max-width: 800px;
  margin: 0 auto;
  animation: subtitleFadeIn 1s ease-out 0.3s both;
}

@keyframes subtitleFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* ===== MAIN CONTENT SECTION ===== */

.about-content-section {
  position: relative;
  background: linear-gradient(180deg, #0a0f2c 0%, #1a1f3a 100%);
  padding: 6rem 0;
  overflow: hidden;
}

.about-content-section::before {
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

/* Floating Decorative Elements */
.floating-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  animation: floatOrb 25s ease-in-out infinite;
  pointer-events: none;
}

.floating-orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #60a5fa, transparent);
  top: 10%;
  left: 5%;
  animation-delay: 0s;
}

.floating-orb-2 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, #3b82f6, transparent);
  bottom: 10%;
  right: 5%;
  animation-delay: 8s;
}

@keyframes floatOrb {
  0%, 100% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(40px, -40px);
  }
  66% {
    transform: translate(-30px, 30px);
  }
}

/* ===== IMAGE SECTION ===== */

.image-container {
  position: relative;
  display: inline-block;
  max-width: 100%;
}

.image-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(96, 165, 250, 0.4), transparent 70%);
  transform: translate(-50%, -50%);
  filter: blur(50px);
  animation: pulseGlow 4s ease-in-out infinite;
  z-index: 0;
}

@keyframes pulseGlow {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.15);
    opacity: 0.9;
  }
}

.about-image {
  position: relative;
  max-width: 450px;
  width: 100%;
  border-radius: 30px;
  box-shadow: 
    0 30px 90px rgba(96, 165, 250, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.about-image:hover {
  transform: scale(1.05) rotate(2deg);
  box-shadow: 
    0 35px 110px rgba(96, 165, 250, 0.7),
    0 0 0 1px rgba(96, 165, 250, 0.5);
}

/* ===== TEXT CONTENT ===== */

.content-wrapper {
  position: relative;
  z-index: 2;
}

.section-heading {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #93c5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
}

.section-heading::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #60a5fa, #3b82f6);
  border-radius: 2px;
}

.mission-quote {
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  font-style: italic;
  color: #93c5fd;
  font-weight: 500;
  padding: 1.5rem;
  background: rgba(96, 165, 250, 0.08);
  border-left: 4px solid #60a5fa;
  border-radius: 12px;
  margin-bottom: 2.5rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(96, 165, 250, 0.15);
}

.content-paragraph {
  font-size: 1.1rem;
  line-height: 1.9;
  color: #cbd5e1;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.content-paragraph:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(96, 165, 250, 0.2);
  transform: translateX(5px);
}

.content-paragraph strong {
  color: #60a5fa;
  font-weight: 600;
}

/* ===== HIGHLIGHT BOX ===== */

.highlight-box {
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.1), rgba(59, 130, 246, 0.1));
  border: 2px solid rgba(96, 165, 250, 0.3);
  border-radius: 20px;
  padding: 2rem;
  margin: 3rem 0;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.highlight-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #60a5fa, #3b82f6, #8b5cf6);
  background-size: 200% 100%;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.highlight-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #60a5fa;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.highlight-icon {
  width: 30px;
  height: 30px;
  color: #60a5fa;
}

.highlight-content {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #e5e7eb;
}

/* ===== VALUES GRID ===== */

.values-section {
  margin-top: 4rem;
  padding: 3rem 0;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.value-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.value-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #60a5fa, #3b82f6);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.value-card:hover::before {
  opacity: 1;
}

.value-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(96, 165, 250, 0.4);
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(96, 165, 250, 0.3);
}

.value-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(59, 130, 246, 0.2));
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(96, 165, 250, 0.3);
}

.value-icon svg {
  width: 30px;
  height: 30px;
  color: #60a5fa;
}

.value-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.75rem;
}

.value-description {
  font-size: 1rem;
  color: #cbd5e1;
  line-height: 1.7;
}

/* ===== LEGACY SECTION ===== */

.legacy-section {
  margin-top: 5rem;
  padding: 4rem 3rem;
  background: rgba(96, 165, 250, 0.05);
  border-radius: 30px;
  border: 1px solid rgba(96, 165, 250, 0.2);
  position: relative;
  overflow: hidden;
}

.legacy-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(96, 165, 250, 0.1), transparent 70%);
  pointer-events: none;
}

.legacy-content {
  position: relative;
  z-index: 2;
}

.legacy-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: #60a5fa;
  margin-bottom: 2rem;
  text-align: center;
}

.legacy-text {
  font-size: 1.15rem;
  line-height: 1.9;
  color: #e5e7eb;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

/* ===== RESPONSIVE DESIGN ===== */

@media (max-width: 768px) {
  .about-hero {
    padding: 4rem 0 3rem;
  }

  .about-content-section {
    padding: 4rem 0;
  }

  .about-image {
    max-width: 100%;
    margin-bottom: 3rem;
  }

  .section-heading::after {
    width: 80px;
  }

  .mission-quote {
    padding: 1.25rem;
  }

  .content-paragraph {
    padding: 1.25rem;
    font-size: 1.05rem;
  }

  .highlight-box {
    padding: 1.5rem;
  }

  .values-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .legacy-section {
    padding: 3rem 2rem;
  }

  .floating-orb {
    opacity: 0.08;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .section-heading {
    font-size: 1.8rem;
  }

  .mission-quote {
    font-size: 1.1rem;
    padding: 1rem;
  }

  .value-card {
    padding: 1.5rem;
  }

  .legacy-section {
    padding: 2rem 1.5rem;
  }
}

/* ===== ACCESSIBILITY ===== */

.about-image:focus,
.value-card:focus,
.content-paragraph:focus {
  outline: 3px solid #60a5fa;
  outline-offset: 4px;
}
`}</style>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content container">
          <h1 className="hero-title">Mission Statement</h1>
          <p className="hero-subtitle">
            "Educating the Devout, Empowering the Dedicated — In Spirit, Faith, and Service."
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="about-content-section">
        <div className="floating-orb floating-orb-1"></div>
        <div className="floating-orb floating-orb-2"></div>

        <div className="container">
          <div className="row align-items-center g-5">
            
            {/* Image Column */}
            <div className="col-lg-5 text-center" data-aos="zoom-in">
              <div className="image-container">
                <div className="image-glow"></div>
                <img
                  src="/asset/hero-bg.jpeg"
                  alt="Sardar Kartar Singh Jhabbar Khalsa"
                  className="about-image img-fluid"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="col-lg-7 content-wrapper">
              
              <h2 className="section-heading" data-aos="fade-left">
                Our Sacred Legacy
              </h2>

              <div className="mission-quote" data-aos="fade-left" data-aos-delay="100">
                Inspired by the sacred life and legacy of <strong>Wings Of Change</strong> — 
                the saint-soldier who led the Gurdwara Sudhar Lehar.
              </div>

              <div className="content-paragraph" data-aos="fade-up" data-aos-delay="200">
                Inspired by the sacred life and legacy of <strong>Wings Of Change</strong> — 
                the saint-soldier who led the Gurdwara Sudhar Lehar and reclaimed the sanctity of Sikh 
                institutions from Mahants and colonial control — this Trust is founded to keep his 
                spirit of <strong>sewa, maryada,</strong> and faith-based leadership alive for generations to come.
              </div>

              <div className="content-paragraph" data-aos="fade-up" data-aos-delay="300">
                Our mission is to honour those who serve the path of righteousness — the 
                <strong> Granthis, Paathis, Raagis, Sewadars, Pujaris, Maulvis</strong> and all who live lives 
                of humble devotion. Their children, often limited by economic means, deserve the fullest 
                access to education, science, technology, civil services, and sports, so that the flame 
                of <strong>Guru da Gyaan</strong> may shine through them in every field of excellence.
              </div>

              <div className="highlight-box" data-aos="fade-up" data-aos-delay="400">
                <h3 className="highlight-title">
                  <svg className="highlight-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Core Principle
                </h3>
                <p className="highlight-content">
                  The core principle of this Trust, in true accordance with the vision of 
                  <strong> Wings Of Change</strong>, is that every beneficiary must live as a 
                  devout Sikh throughout life — steadfast in <strong>Rehat Maryada</strong>, committed to the 
                  teachings of the Ten Gurus, and guided by the eternal light of 
                  <strong> Sri Guru Granth Sahib ji</strong>, the Everliving Guru.
                </p>
              </div>

              <div className="content-paragraph" data-aos="fade-up" data-aos-delay="500">
                We believe that education without faith is incomplete, and worldly success without 
                discipline is hollow. Our mission is not merely to fund education, but to nurture souls 
                anchored in Sikhi, hearts devoted to truth, and lives committed to 
                <strong> Naam, Kirat, and Vand Chhakna</strong>.
              </div>

            </div>
          </div>

          {/* Values Grid */}
          <div className="values-section">
            <h2 className="section-heading text-center" data-aos="fade-up">
              Our Guiding Values
            </h2>
            
            <div className="values-grid">
              <div className="value-card" data-aos="fade-up" data-aos-delay="100">
                <div className="value-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="value-title">Naam (Divine Name)</h3>
                <p className="value-description">
                  Living in constant remembrance of Waheguru, anchored in spiritual devotion and faith.
                </p>
              </div>

              <div className="value-card" data-aos="fade-up" data-aos-delay="200">
                <div className="value-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="value-title">Kirat (Honest Work)</h3>
                <p className="value-description">
                  Earning through righteous means, with integrity, discipline, and dedication.
                </p>
              </div>

              <div className="value-card" data-aos="fade-up" data-aos-delay="300">
                <div className="value-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="value-title">Vand Chhakna (Sharing)</h3>
                <p className="value-description">
                  Sharing selflessly with others, serving humanity through compassion and generosity.
                </p>
              </div>
            </div>
          </div>

          {/* Legacy Section */}
          <div className="legacy-section" data-aos="zoom-in">
            <div className="legacy-content">
              <h2 className="legacy-title">Continuing the Legacy</h2>
              <p className="legacy-text">
                Through this Trust, we continue what <strong>Wings Of Change</strong> began — 
                the creation of a selfless community of learned, upright, and devoted Sikhs who serve 
                humanity with knowledge, humility, and courage until their last breath.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default About;
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = `rgba(96, 165, 250, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <style>{`
/* ===== PREMIUM HERO SECTION ===== */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0f2c 0%, #1a1f3a 50%, #0a0f2c 100%);
  font-family: 'Poppins', sans-serif;
}

/* Animated Gradient Background */
.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(96, 165, 250, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 70%);
  animation: gradientPulse 8s ease-in-out infinite;
}

@keyframes gradientPulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

/* Canvas for Particles */
.particle-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

/* Floating Orbs */
.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
  animation: floatOrb 20s ease-in-out infinite;
  pointer-events: none;
}

.hero-orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #60a5fa, transparent);
  top: 10%;
  left: 5%;
  animation-delay: 0s;
}

.hero-orb-2 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, #3b82f6, transparent);
  bottom: 15%;
  right: 10%;
  animation-delay: 4s;
}

.hero-orb-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #8b5cf6, transparent);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 8s;
}

@keyframes floatOrb {
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(30px, -30px);
  }
  50% {
    transform: translate(-20px, 20px);
  }
  75% {
    transform: translate(20px, 30px);
  }
}

/* Content Container */
.hero-content {
  position: relative;
  z-index: 10;
  max-width: 900px;
  padding: 2rem;
  animation: heroFadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) both;
}

@keyframes heroFadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Logo Container */
.hero-logo-container {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
  animation: heroLogoAppear 1.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  animation-delay: 0.3s;
}

@keyframes heroLogoAppear {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(30px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Logo Glow Effect */
.hero-logo-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(96, 165, 250, 0.4), transparent 70%);
  transform: translate(-50%, -50%);
  animation: pulseGlow 3s ease-in-out infinite;
  z-index: -1;
  border-radius: 50%;
}

@keyframes pulseGlow {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.9;
  }
}

/* Logo Image */
.hero-logo {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 4px solid rgba(251, 191, 36, 0.6);
  box-shadow: 
    0 0 40px rgba(96, 165, 250, 0.5),
    0 0 80px rgba(59, 130, 246, 0.3),
    inset 0 0 20px rgba(255, 255, 255, 0.1);
  animation: floatLogo 6s ease-in-out infinite;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
}

.hero-logo-container:hover .hero-logo {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 
    0 0 60px rgba(96, 165, 250, 0.8),
    0 0 120px rgba(59, 130, 246, 0.5),
    inset 0 0 30px rgba(255, 255, 255, 0.2);
  border-color: rgba(251, 191, 36, 1);
}

@keyframes floatLogo {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Title */
.hero-title {
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 60px rgba(96, 165, 250, 0.3);
  animation: titleSlideIn 1s cubic-bezier(0.4, 0, 0.2, 1) both;
  animation-delay: 0.5s;
  position: relative;
}

.hero-title::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  z-index: -1;
  filter: blur(20px);
  opacity: 0.5;
}

@keyframes titleSlideIn {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Subtitle */
.hero-subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: #cbd5e1;
  line-height: 1.7;
  max-width: 750px;
  margin: 0 auto 2.5rem;
  font-weight: 400;
  animation: subtitleSlideIn 1s cubic-bezier(0.4, 0, 0.2, 1) both;
  animation-delay: 0.7s;
}

@keyframes subtitleSlideIn {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Buttons Container */
.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: buttonsSlideUp 1s cubic-bezier(0.4, 0, 0.2, 1) both;
  animation-delay: 0.9s;
}

@keyframes buttonsSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Primary Button */
.hero-btn-primary {
  position: relative;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%);
  border: none;
  border-radius: 50px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 10px 30px rgba(37, 99, 235, 0.4),
    0 0 20px rgba(96, 165, 250, 0.3);
  text-decoration: none;
  display: inline-block;
}

.hero-btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
}

.hero-btn-primary:hover::before {
  left: 100%;
}

.hero-btn-primary:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 
    0 15px 40px rgba(37, 99, 235, 0.6),
    0 0 40px rgba(96, 165, 250, 0.5);
  color: #ffffff;
}

.hero-btn-primary:active {
  transform: translateY(-2px) scale(1.02);
}

/* Secondary Button */
.hero-btn-secondary {
  position: relative;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  text-decoration: none;
  display: inline-block;
}

.hero-btn-secondary::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(59, 130, 246, 0.2));
  border-radius: 50px;
  transform: translate(-50%, -50%);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.hero-btn-secondary:hover::before {
  width: 100%;
  height: 100%;
}

.hero-btn-secondary:hover {
  color: #93c5fd;
  border-color: rgba(96, 165, 250, 0.8);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(96, 165, 250, 0.2);
}

/* Stats Section */
.hero-stats {
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin-top: 4rem;
  flex-wrap: wrap;
  animation: statsSlideUp 1s cubic-bezier(0.4, 0, 0.2, 1) both;
  animation-delay: 1.1s;
}

@keyframes statsSlideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-stat {
  text-align: center;
  padding: 1.5rem 2rem;
  background: rgba(96, 165, 250, 0.05);
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  min-width: 150px;
}

.hero-stat:hover {
  background: rgba(96, 165, 250, 0.1);
  border-color: rgba(96, 165, 250, 0.4);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(96, 165, 250, 0.2);
}

.hero-stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #60a5fa, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  display: block;
}

.hero-stat-label {
  font-size: 0.95rem;
  color: #cbd5e1;
  font-weight: 500;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  animation: scrollBounce 2s ease-in-out infinite;
}

@keyframes scrollBounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

.scroll-indicator svg {
  width: 30px;
  height: 30px;
  color: rgba(255, 255, 255, 0.6);
  filter: drop-shadow(0 0 10px rgba(96, 165, 250, 0.5));
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-logo {
    width: 140px;
    height: 140px;
  }

  .hero-logo-glow {
    width: 160px;
    height: 160px;
  }

  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-buttons {
    gap: 1rem;
  }

  .hero-btn-primary,
  .hero-btn-secondary {
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }

  .hero-stats {
    gap: 1.5rem;
    margin-top: 3rem;
  }

  .hero-stat {
    padding: 1rem 1.5rem;
    min-width: 120px;
  }

  .hero-stat-number {
    font-size: 2rem;
  }

  .hero-orb-1,
  .hero-orb-2,
  .hero-orb-3 {
    opacity: 0.2;
  }
}

@media (max-width: 576px) {
  .hero-content {
    padding: 1.5rem;
  }

  .hero-logo {
    width: 120px;
    height: 120px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-btn-primary,
  .hero-btn-secondary {
    width: 100%;
    text-align: center;
  }
}

/* Accessibility */
.hero-btn-primary:focus-visible,
.hero-btn-secondary:focus-visible {
  outline: 3px solid #60a5fa;
  outline-offset: 4px;
}
`}</style>

      <section className="hero-section">
        {/* Particle Canvas */}
        <canvas ref={canvasRef} className="particle-canvas"></canvas>

        {/* Floating Orbs */}
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>

        {/* Content */}
        <div className="container text-center hero-content">
          {/* Logo */}
          <div className="hero-logo-container">
            <div className="hero-logo-glow"></div>
            <img
              src="logo.jpeg"
              alt="Sardar Kartar Singh Jhabbar Trust Logo"
              className="hero-logo"
            />
          </div>

          {/* Title */}
          <h1 className="hero-title" data-text="Sardar Kartar Singh Jhabbar Trust">
            Wings Of Change Trust
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Educating the Devout, Empowering the Dedicated — In Spirit, Faith, and Service
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <Link to="/donate" className="hero-btn-primary">
              Donate Now
            </Link>
            <Link to="/about" className="hero-btn-secondary">
              Learn More
            </Link>
          </div>

          {/* Stats (Optional - uncomment to use) */}
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">500+</span>
              <span className="hero-stat-label">Students Helped</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">₹10L+</span>
              <span className="hero-stat-label">Scholarships Given</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">15+</span>
              <span className="hero-stat-label">Years of Service</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    </>
  );
}

export default Hero;
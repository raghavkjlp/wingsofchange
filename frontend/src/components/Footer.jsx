import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer mt-auto">
        <div className="footer-content">
          {/* Main Footer */}
          <div className="container py-5">
            <div className="row g-4">
              {/* About Section */}
              <div className="col-lg-4 col-md-6">
                <div className="footer-section">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="logo.jpeg"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="rounded-circle border border-2 border-warning me-3 p-1 bg-white footer-logo"
                    />
                    <h5 className="footer-brand mb-0">
                     WOC Trust
                    </h5>
                  </div>
                  <p className="footer-text">
                    Empowering students through education and scholarship programs.
                    Building a brighter future, one student at a time.
                  </p>
                  {/* Social Links */}
                  <div className="social-links mt-4">
                    <a href="#" className="social-icon" aria-label="Facebook">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="social-icon" aria-label="Twitter">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href="#" className="social-icon" aria-label="Instagram">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="social-icon" aria-label="LinkedIn">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-lg-2 col-md-6">
                <div className="footer-section">
                  <h6 className="footer-heading">Quick Links</h6>
                  <ul className="footer-links">
                    <li>
                      <Link to="/" className="footer-link">
                        <span className="link-arrow">→</span> Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="footer-link">
                        <span className="link-arrow">→</span> About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/donate" className="footer-link">
                        <span className="link-arrow">→</span> Donate
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="footer-link">
                        <span className="link-arrow">→</span> Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Student Portal */}
              <div className="col-lg-3 col-md-6">
                <div className="footer-section">
                  <h6 className="footer-heading">Student Portal</h6>
                  <ul className="footer-links">
                    <li>
                      <Link to="/login" className="footer-link">
                        <span className="link-arrow">→</span> Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" className="footer-link">
                        <span className="link-arrow">→</span> Register
                      </Link>
                    </li>
                    <li>
                      <Link to="/active-students" className="footer-link">
                        <span className="link-arrow">→</span> Active Students
                      </Link>
                    </li>
                    <li>
                      <Link to="/results" className="footer-link">
                        <span className="link-arrow">→</span> Results
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Info */}
              <div className="col-lg-3 col-md-6">
                <div className="footer-section">
                  <h6 className="footer-heading">Get in Touch</h6>
                  <ul className="footer-contact">
                    <li>
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="me-2">
                        <path d="M12 0C7.802 0 4.403 3.403 4.403 7.602 4.403 11.8 7.469 16.812 12 24c4.531-7.188 7.597-12.2 7.597-16.398C19.597 3.403 16.199 0 12 0zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                      </svg>
                      Amritsar, Punjab, India
                    </li>
                    <li>
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="me-2">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      info@sksjabbar.org
                    </li>
                    <li>
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="me-2">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                      </svg>
                      +91 XXX XXX XXXX
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start">
                  <p className="mb-0 footer-copyright">
                    &copy; {new Date().getFullYear()}{" "}
                    <span className="text-warning fw-semibold">
                     WingsOfChange
                    </span>
                    . All rights reserved.
                  </p>
                </div>
                <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
                  <Link to="/privacy" className="footer-bottom-link">
                    Privacy Policy
                  </Link>
                  <span className="mx-2 text-muted">|</span>
                  <Link to="/terms" className="footer-bottom-link">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="footer-gradient"></div>
        <div className="footer-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </footer>

      <style>{`
/* ===== PREMIUM FOOTER DESIGN ===== */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.footer {
  position: relative;
  width: 100%;
  background: linear-gradient(135deg, #0a0f2c 0%, #1a1f3a 100%);
  color: #e5e7eb;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
}

/* Animated Gradient Top Border */
.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, 
    #2563eb 0%, 
    #60a5fa 25%, 
    #3b82f6 50%, 
    #60a5fa 75%, 
    #2563eb 100%
  );
  background-size: 200% 100%;
  animation: gradientShift 4s linear infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 0%; }
  100% { background-position: 200% 0%; }
}

/* Decorative Gradient Overlay */
.footer-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(96, 165, 250, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%);
  pointer-events: none;
}

/* Floating Particles Animation */
.footer-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(96, 165, 250, 0.4);
  border-radius: 50%;
  animation: float 15s infinite ease-in-out;
}

.particle:nth-child(1) {
  left: 10%;
  top: 20%;
  animation-delay: 0s;
  animation-duration: 12s;
}

.particle:nth-child(2) {
  left: 30%;
  top: 60%;
  animation-delay: 2s;
  animation-duration: 15s;
}

.particle:nth-child(3) {
  left: 60%;
  top: 30%;
  animation-delay: 4s;
  animation-duration: 18s;
}

.particle:nth-child(4) {
  left: 80%;
  top: 70%;
  animation-delay: 6s;
  animation-duration: 14s;
}

.particle:nth-child(5) {
  left: 45%;
  top: 50%;
  animation-delay: 8s;
  animation-duration: 16s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  50% {
    transform: translateY(-50px) translateX(30px);
    opacity: 1;
  }
  90% {
    opacity: 0.6;
  }
}

.footer-content {
  position: relative;
  z-index: 1;
}

/* Logo Animation */
.footer-logo {
  transition: all 0.3s ease;
}

.footer-logo:hover {
  transform: rotate(360deg) scale(1.1);
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
}

/* Brand */
.footer-brand {
  font-weight: 700;
  font-size: 1.25rem;
  background: linear-gradient(135deg, #ffffff 0%, #93c5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Section Text */
.footer-text {
  color: #9ca3af;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Headings */
.footer-heading {
  color: #ffffff;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
}

.footer-heading::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #60a5fa, #3b82f6);
  border-radius: 2px;
}

/* Links */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-link {
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  position: relative;
}

.link-arrow {
  display: inline-block;
  margin-right: 0.5rem;
  transition: transform 0.3s ease;
  color: #60a5fa;
}

.footer-link:hover {
  color: #60a5fa;
  transform: translateX(5px);
}

.footer-link:hover .link-arrow {
  transform: translateX(5px);
}

/* Contact Info */
.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-contact li {
  color: #9ca3af;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.footer-contact li:hover {
  color: #93c5fd;
  transform: translateX(5px);
}

.footer-contact svg {
  flex-shrink: 0;
  color: #60a5fa;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: rgba(96, 165, 250, 0.1);
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 12px;
  color: #93c5fd;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.social-icon::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 12px;
  background: linear-gradient(135deg, #60a5fa, #3b82f6);
  transform: translate(-50%, -50%);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.social-icon:hover::before {
  width: 100%;
  height: 100%;
}

.social-icon:hover {
  color: #ffffff;
  border-color: transparent;
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(96, 165, 250, 0.4);
}

/* Bottom Bar */
.footer-bottom {
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.5rem 0;
  margin-top: 3rem;
}

.footer-copyright {
  font-size: 0.9rem;
  color: #9ca3af;
}

.footer-bottom-link {
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  position: relative;
}

.footer-bottom-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1px;
  background: #60a5fa;
  transition: width 0.3s ease;
}

.footer-bottom-link:hover {
  color: #60a5fa;
}

.footer-bottom-link:hover::after {
  width: 100%;
}

/* Entrance Animation */
.footer {
  animation: footerSlideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
}

@keyframes footerSlideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-section {
    margin-bottom: 2rem;
  }

  .footer-heading::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .social-links {
    justify-content: center;
  }

  .footer-links,
  .footer-contact {
    text-align: center;
  }

  .footer-link,
  .footer-contact li {
    justify-content: center;
  }

  .footer-bottom {
    text-align: center;
  }

  .particle {
    display: none;
  }
}

@media (max-width: 576px) {
  .footer-brand {
    font-size: 1rem;
  }

  .footer-heading {
    font-size: 1rem;
  }

  .social-icon {
    width: 38px;
    height: 38px;
  }
}

/* Accessibility */
.footer-link:focus-visible,
.social-icon:focus-visible,
.footer-bottom-link:focus-visible {
  outline: 2px solid #60a5fa;
  outline-offset: 4px;
  border-radius: 4px;
}
`}</style>
    </>
  );
}

export default Footer;
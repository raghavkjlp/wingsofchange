import React, { useState, useEffect } from "react";
import API from "../services/Api";
import AOS from "aos";
import "aos/dist/aos.css";

function Donate() {
  const [donor, setDonor] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    gender: "",
    amount: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  const handleChange = (e) => {
    setDonor({ ...donor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await API.post("/donations", donor);
      alert("Your details have been submitted! Our team will contact you soon.");
      setDonor({
        name: "",
        email: "",
        contact: "",
        address: "",
        gender: "",
        amount: "",
        message: ""
      });
    } catch {
      alert("Error submitting your details. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
/* ===== PREMIUM DONATE PAGE DESIGN ===== */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}

body {
  background: linear-gradient(135deg, #0a0f2c 0%, #1a1f3a 100%);
  overflow-x: hidden;
}

/* ===== HERO SECTION ===== */

.donate-hero {
  position: relative;
  min-height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%);
  overflow: hidden;
  padding: 5rem 0 3rem;
  margin-bottom: 4rem;
}

.donate-hero::before {
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

.donate-hero::after {
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
  max-width: 800px;
  margin: 0 auto;
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
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: #e0f2fe;
  margin-bottom: 2rem;
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

.hero-stats {
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.hero-stat {
  text-align: center;
}

.hero-stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #60a5fa;
  display: block;
  margin-bottom: 0.5rem;
}

.hero-stat-label {
  font-size: 0.95rem;
  color: #cbd5e1;
  font-weight: 500;
}

/* ===== MAIN SECTION ===== */

.donate-section {
  position: relative;
  padding: 0 0 6rem;
  overflow: hidden;
}

.donate-section::before {
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
  z-index: 0;
}

/* Floating Decorative Elements */
.floating-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  animation: floatOrb 25s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
}

.floating-orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #60a5fa, transparent);
  top: 20%;
  left: 5%;
  animation-delay: 0s;
}

.floating-orb-2 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, #3b82f6, transparent);
  bottom: 20%;
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

.content-wrapper {
  position: relative;
  z-index: 1;
}

/* ===== INFO SECTION ===== */

.donate-info {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
  margin-bottom: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.info-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #60a5fa;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.info-icon {
  width: 35px;
  height: 35px;
  color: #60a5fa;
}

.info-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #cbd5e1;
  margin-bottom: 1.5rem;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.info-list-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background: rgba(30, 58, 138, 0.3);
  border-left: 3px solid #3b82f6;
  border-radius: 8px;
  color: #e5e7eb;
  transition: all 0.3s ease;
}

.info-list-item:hover {
  background: rgba(30, 58, 138, 0.5);
  transform: translateX(10px);
}

.info-list-icon {
  width: 20px;
  height: 20px;
  color: #60a5fa;
  flex-shrink: 0;
}

/* ===== FORM SECTION ===== */

.donate-form-container {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 3rem;
  box-shadow: 
    0 30px 90px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
}

.donate-form-container::before {
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

.form-title {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #93c5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  color: #93c5fd;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: #e5e7eb;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(96, 165, 250, 0.6);
  box-shadow: 
    0 0 0 4px rgba(96, 165, 250, 0.1),
    0 10px 30px rgba(96, 165, 250, 0.2);
  transform: translateY(-2px);
}

.form-input:focus + .form-label,
.form-select:focus + .form-label,
.form-textarea:focus + .form-label {
  color: #60a5fa;
}

.form-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2393c5fd' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 3rem;
}

.form-select option {
  background: #1a1f3a;
  color: #e5e7eb;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

/* Amount Input Special Styling */
.amount-input-wrapper {
  position: relative;
}

.amount-input-wrapper::before {
  content: '₹';
  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  font-weight: 700;
  color: #60a5fa;
  pointer-events: none;
}

.amount-input {
  padding-left: 2.75rem;
  font-weight: 600;
  font-size: 1.1rem;
}

.amount-note {
  font-size: 0.85rem;
  color: #93c5fd;
  margin-top: 0.5rem;
  font-style: italic;
}

/* ===== SUBMIT BUTTON ===== */

.submit-button {
  width: 100%;
  padding: 1.25rem 2rem;
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%);
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 10px 40px rgba(37, 99, 235, 0.4),
    0 0 20px rgba(96, 165, 250, 0.3);
  position: relative;
  overflow: hidden;
  margin-top: 2rem;
}

.submit-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
}

.submit-button:hover::before {
  left: 100%;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 
    0 15px 50px rgba(37, 99, 235, 0.6),
    0 0 40px rgba(96, 165, 250, 0.5);
}

.submit-button:active:not(:disabled) {
  transform: translateY(-2px) scale(1);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.button-icon {
  width: 24px;
  height: 24px;
}

/* Loading Spinner */
.spinner {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* ===== PAYMENT METHODS ===== */

.payment-methods {
  margin-top: 3rem;
  padding: 2rem;
  background: rgba(96, 165, 250, 0.05);
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 20px;
  text-align: center;
}

.payment-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #60a5fa;
  margin-bottom: 1rem;
}

.payment-text {
  font-size: 1rem;
  color: #cbd5e1;
  line-height: 1.7;
}

/* ===== RESPONSIVE DESIGN ===== */

@media (max-width: 768px) {
  .donate-hero {
    padding: 3rem 0 2rem;
    margin-bottom: 3rem;
  }

  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 1.05rem;
  }

  .hero-stats {
    gap: 2rem;
  }

  .hero-stat-number {
    font-size: 2rem;
  }

  .donate-info {
    padding: 2rem;
  }

  .info-title {
    font-size: 1.5rem;
  }

  .donate-form-container {
    padding: 2rem;
  }

  .form-title {
    font-size: 1.6rem;
  }

  .form-input,
  .form-select,
  .form-textarea {
    padding: 0.9rem 1rem;
  }

  .submit-button {
    padding: 1.1rem 1.5rem;
    font-size: 1.05rem;
  }

  .floating-orb {
    opacity: 0.08;
  }
}

@media (max-width: 576px) {
  .donate-hero {
    padding: 2.5rem 0 2rem;
  }

  .hero-stats {
    gap: 1.5rem;
  }

  .donate-info {
    padding: 1.5rem;
  }

  .info-title {
    font-size: 1.3rem;
    flex-direction: column;
    text-align: center;
  }

  .donate-form-container {
    padding: 1.5rem;
  }

  .form-title {
    font-size: 1.4rem;
  }

  .payment-methods {
    padding: 1.5rem;
  }
}

/* ===== ACCESSIBILITY ===== */

.form-input:focus-visible,
.form-select:focus-visible,
.form-textarea:focus-visible,
.submit-button:focus-visible {
  outline: 3px solid #60a5fa;
  outline-offset: 4px;
}
`}</style>

      {/* Hero Section */}
      <section className="donate-hero">
        <div className="hero-content container">
          <h1 className="hero-title">Make a Difference</h1>
          <p className="hero-subtitle">
            Your contribution helps build a future grounded in values, education, and service.
            Together, we can empower the next generation of devoted leaders.
          </p>
          
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">500+</span>
              <span className="hero-stat-label">Students Supported</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">₹10L+</span>
              <span className="hero-stat-label">Scholarships Awarded</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">15+</span>
              <span className="hero-stat-label">Years of Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="donate-section">
        <div className="floating-orb floating-orb-1"></div>
        <div className="floating-orb floating-orb-2"></div>

        <div className="container content-wrapper">
          <div className="row g-4">
            
            {/* Info Column */}
            <div className="col-lg-5">
              <div className="donate-info" data-aos="fade-right">
                <h2 className="info-title">
                  <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Why Donate?
                </h2>
                
                <p className="info-text">
                  Your generous contribution directly supports students from families devoted to 
                  religious service, helping them access quality education and reach their full potential.
                </p>

                <ul className="info-list">
                  <li className="info-list-item">
                    <svg className="info-list-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Support education for deserving students</span>
                  </li>
                  <li className="info-list-item">
                    <svg className="info-list-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Empower families dedicated to service</span>
                  </li>
                  <li className="info-list-item">
                    <svg className="info-list-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Build a community of learned leaders</span>
                  </li>
                  <li className="info-list-item">
                    <svg className="info-list-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Continue Sardar Kartar Singh's legacy</span>
                  </li>
                </ul>

                <p className="info-text" style={{marginTop: '2rem'}}>
                  <strong>Tax Benefits:</strong> All donations are eligible for tax deduction under 
                  Section 80G of the Income Tax Act.
                </p>
              </div>
            </div>

            {/* Form Column */}
            <div className="col-lg-7">
              <div className="donate-form-container" data-aos="fade-left">
                <h2 className="form-title">Donation Form</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={donor.name}
                      placeholder="Enter your full name"
                      className="form-input"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={donor.email}
                      placeholder="your.email@example.com"
                      className="form-input"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Contact Number *</label>
                    <input
                      type="text"
                      name="contact"
                      value={donor.contact}
                      placeholder="+91 XXXXX XXXXX"
                      className="form-input"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Full Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={donor.address}
                      placeholder="Enter your complete address"
                      className="form-input"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Gender *</label>
                    <select
                      name="gender"
                      value={donor.gender}
                      className="form-select"
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Donation Amount (INR) *</label>
                    <div className="amount-input-wrapper">
                      <input
                        type="number"
                        name="amount"
                        value={donor.amount}
                        placeholder="Enter amount"
                        className="form-input amount-input"
                        onChange={handleChange}
                        min="500"
                        required
                      />
                    </div>
                    <p className="amount-note">Minimum donation: ₹500</p>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={donor.message}
                      placeholder="Share your thoughts or special instructions..."
                      className="form-textarea"
                      rows="4"
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    <div className="button-content">
                      {isSubmitting ? (
                        <>
                          <div className="spinner"></div>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span>Submit Donation Details</span>
                        </>
                      )}
                    </div>
                  </button>
                </form>

                <div className="payment-methods">
                  <h3 className="payment-title">What Happens Next?</h3>
                  <p className="payment-text">
                    After submitting your details, our team will contact you within 24 hours with 
                    payment instructions and complete the donation process. Thank you for your generosity!
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Donate;
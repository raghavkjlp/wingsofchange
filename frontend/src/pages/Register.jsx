import React, { useState, useEffect } from "react";
import API from "../services/Api";
import ReCAPTCHA from "react-google-recaptcha";
import AOS from "aos";
import "aos/dist/aos.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const [captchaToken, setCaptchaToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCaptcha = (value) => {
    setCaptchaToken(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken && formData.role !== "admin") {
      alert("Please verify that you are not a robot!");
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await API.post("/auth/register", {
        ...formData,
        token: captchaToken,
      });

      alert(`User registered: ${data.user.name}`);
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);
      window.location.href = "/";
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
/* ===== PREMIUM REGISTER PAGE DESIGN ===== */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

.register-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0f2c 0%, #1a1f3a 50%, #0a0f2c 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  position: relative;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
}
  html, body {
  margin: 0;
  padding: 0;
  background: #0a0f2c;
}


.register-page::before {
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
  opacity: 0.3;
  animation: float 20s ease-in-out infinite;
  pointer-events: none;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: #60a5fa;
  top: -10%;
  right: -5%;
  animation-delay: 0s;
}

.orb-2 {
  width: 350px;
  height: 350px;
  background: #3b82f6;
  bottom: -10%;
  left: -5%;
  animation-delay: 7s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: #8b5cf6;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 3.5s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(40px, -40px); }
  66% { transform: translate(-40px, 40px); }
}

.register-container {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 520px;
}

.register-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 3rem 2.5rem;
  box-shadow: 
    0 30px 80px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(96, 165, 250, 0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.register-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(96, 165, 250, 0.3);
  box-shadow: 
    0 35px 100px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(96, 165, 250, 0.3);
}

.register-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.register-icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(59, 130, 246, 0.2));
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(96, 165, 250, 0.3);
  transition: all 0.4s ease;
}

.register-card:hover .register-icon-wrapper {
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.3), rgba(59, 130, 246, 0.3));
  transform: rotateY(360deg);
  box-shadow: 0 10px 30px rgba(96, 165, 250, 0.4);
}

.register-icon-wrapper svg {
  width: 40px;
  height: 40px;
  color: #60a5fa;
}

.register-title {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #93c5fd 0%, #60a5fa 50%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.register-subtitle {
  color: #cbd5e1;
  font-size: 0.95rem;
  font-weight: 400;
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
.form-select {
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
}

.form-input::placeholder {
  color: rgba(203, 213, 225, 0.5);
}

.form-input:focus,
.form-select:focus {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(96, 165, 250, 0.5);
  box-shadow: 
    0 0 0 3px rgba(96, 165, 250, 0.1),
    0 4px 20px rgba(96, 165, 250, 0.2);
}

.form-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2360a5fa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.2rem;
  padding-right: 3rem;
}

.form-select option {
  background: #1a1f3a;
  color: #ffffff;
  padding: 0.5rem;
}

.captcha-wrapper {
  display: flex;
  justify-content: center;
  margin: 1.75rem 0;
  transform: scale(0.95);
  transform-origin: center;
}

.submit-btn {
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
}

.submit-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
}

.submit-btn:hover::before {
  left: 100%;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 
    0 15px 40px rgba(96, 165, 250, 0.6),
    0 0 30px rgba(96, 165, 250, 0.4);
}

.submit-btn:active:not(:disabled) {
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.5) 0%, rgba(59, 130, 246, 0.5) 100%);
}

.register-footer {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.login-link {
  color: #cbd5e1;
  font-size: 0.95rem;
}

.login-link a {
  color: #60a5fa;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.login-link a:hover {
  color: #93c5fd;
  text-decoration: underline;
}

/* ===== RESPONSIVE DESIGN ===== */

@media (max-width: 576px) {
  .register-card {
    padding: 2.5rem 1.75rem;
    border-radius: 24px;
  }

  .register-title {
    font-size: 1.75rem;
  }

  .register-icon-wrapper {
    width: 70px;
    height: 70px;
  }

  .register-icon-wrapper svg {
    width: 35px;
    height: 35px;
  }

  .form-input,
  .form-select {
    padding: 0.9rem 1rem;
    font-size: 0.95rem;
  }

  .submit-btn {
    padding: 1rem;
    font-size: 1rem;
  }

  .captcha-wrapper {
    transform: scale(0.85);
  }

  .orb-1, .orb-2, .orb-3 {
    width: 250px;
    height: 250px;
  }

  .form-group {
    margin-bottom: 1.25rem;
  }
}

@media (max-width: 400px) {
  .captcha-wrapper {
    transform: scale(0.75);
  }

  .register-card {
    padding: 2rem 1.5rem;
  }
}
      `}</style>

      <div className="register-page">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>

        <div className="register-container">
          <div className="register-card" data-aos="zoom-in">
            <div className="register-header">
              <div className="register-icon-wrapper" data-aos="flip-down" data-aos-delay="200">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
              </div>
              <h2 className="register-title" data-aos="fade-up" data-aos-delay="300">
                Create Account
              </h2>
              <p className="register-subtitle" data-aos="fade-up" data-aos-delay="400">
                Join us and start your journey today
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group" data-aos="fade-up" data-aos-delay="500">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group" data-aos="fade-up" data-aos-delay="600">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group" data-aos="fade-up" data-aos-delay="700">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-input"
                  name="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group" data-aos="fade-up" data-aos-delay="800">
                <label className="form-label">Role</label>
                <select
                  className="form-select"
                  name="role"
                  onChange={handleChange}
                  value={formData.role}
                >
                  <option value="student">Student</option>
                </select>
              </div>

              {/* ✅ reCAPTCHA */}
              {formData.role !== "admin" && (
                <div className="captcha-wrapper" data-aos="fade-up" data-aos-delay="900">
                  <ReCAPTCHA
                    sitekey="6Lfgj0ksAAAAAJ4mGykeKyUX3mccL1T8O12j8Beg"
                    onChange={handleCaptcha}
                    theme="dark"
                  />
                </div>
              )}

              <button
                type="submit"
                className="submit-btn"
                disabled={(!captchaToken && formData.role !== "admin") || isLoading}
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="register-footer" data-aos="fade-up" data-aos-delay="1100">
              <p className="login-link">
                Already have an account? <a href="/login">Sign in here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/Api";
import ReCAPTCHA from "react-google-recaptcha";
import AOS from "aos";
import "aos/dist/aos.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const { data } = await API.post("/auth/login", formData);

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);
      alert(`Welcome back, ${data.user.name}`);
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
/* ===== PREMIUM LOGIN PAGE DESIGN ===== */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

.login-page {
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

.login-page::before {
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
  left: -5%;
  animation-delay: 0s;
}

.orb-2 {
  width: 350px;
  height: 350px;
  background: #3b82f6;
  bottom: -10%;
  right: -5%;
  animation-delay: 7s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(40px, -40px); }
  66% { transform: translate(-40px, 40px); }
}

.login-container {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 480px;
}

.login-card {
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

.login-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(96, 165, 250, 0.3);
  box-shadow: 
    0 35px 100px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(96, 165, 250, 0.3);
}

.login-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.login-icon-wrapper {
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

.login-card:hover .login-icon-wrapper {
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.3), rgba(59, 130, 246, 0.3));
  transform: rotateY(360deg);
  box-shadow: 0 10px 30px rgba(96, 165, 250, 0.4);
}

.login-icon-wrapper svg {
  width: 40px;
  height: 40px;
  color: #60a5fa;
}

.login-title {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #93c5fd 0%, #60a5fa 50%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.login-subtitle {
  color: #cbd5e1;
  font-size: 0.95rem;
  font-weight: 400;
}

.form-group {
  margin-bottom: 1.75rem;
}

html, body {
  margin: 0;
  padding: 0;
  background: #0a0f2c;
}

.form-label {
  display: block;
  color: #e5e7eb;
  font-weight: 500;
  font-size: 0.95rem;
  margin-bottom: 0.6rem;
  letter-spacing: 0.3px;
}

.form-input {
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

.form-input:focus {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(96, 165, 250, 0.5);
  box-shadow: 
    0 0 0 3px rgba(96, 165, 250, 0.1),
    0 4px 20px rgba(96, 165, 250, 0.2);
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

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 
    0 15px 40px rgba(96, 165, 250, 0.6),
    0 0 30px rgba(96, 165, 250, 0.4);
}

.submit-btn:active {
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.submit-btn:disabled:hover {
  box-shadow: 
    0 10px 30px rgba(96, 165, 250, 0.4),
    0 0 20px rgba(96, 165, 250, 0.2);
}

.login-footer {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.signup-link {
  color: #cbd5e1;
  font-size: 0.95rem;
}

.signup-link a {
  color: #60a5fa;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.signup-link a:hover {
  color: #93c5fd;
  text-decoration: underline;
}

/* ===== RESPONSIVE DESIGN ===== */

@media (max-width: 576px) {
  .login-card {
    padding: 2.5rem 1.75rem;
    border-radius: 24px;
  }

  .login-title {
    font-size: 1.75rem;
  }

  .login-icon-wrapper {
    width: 70px;
    height: 70px;
  }

  .login-icon-wrapper svg {
    width: 35px;
    height: 35px;
  }

  .form-input {
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

  .orb-1, .orb-2 {
    width: 250px;
    height: 250px;
  }
}

@media (max-width: 400px) {
  .captcha-wrapper {
    transform: scale(0.75);
  }
}
      `}</style>

      <div className="login-page">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>

        <div className="login-container">
          <div className="login-card" data-aos="zoom-in">
            <div className="login-header">
              <div className="login-icon-wrapper" data-aos="flip-down" data-aos-delay="200">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="login-title" data-aos="fade-up" data-aos-delay="300">
                Welcome Back
              </h2>
              <p className="login-subtitle" data-aos="fade-up" data-aos-delay="400">
                Sign in to continue your journey
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group" data-aos="fade-up" data-aos-delay="500">
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

              <div className="form-group" data-aos="fade-up" data-aos-delay="600">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-input"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isLoading}
                data-aos="fade-up"
                data-aos-delay="800"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <div className="login-footer" data-aos="fade-up" data-aos-delay="900">
              <p className="signup-link">
                Don't have an account? <a href="/signup">Sign up here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
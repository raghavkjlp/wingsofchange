import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { isLoggedIn, getUserRole, getUser, logoutUser } from "../services/Auth";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);
  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const role = getUserRole();
  const user = getUser();

  return (
    <>
      <style>{`
/* ===== PREMIUM ANIMATED NAVBAR ===== */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  backdrop-filter: blur(20px) saturate(180%);
  background: ${scrolled ? 'rgba(10, 15, 44, 0.95)' : 'rgba(10, 15, 44, 0.7)'};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${scrolled ? '0 10px 40px rgba(0, 0, 0, 0.5)' : '0 5px 20px rgba(0, 0, 0, 0.2)'};
}

.navbar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(96, 165, 250, 0.5) 30%, 
    rgba(96, 165, 250, 0.5) 70%, 
    transparent
  );
  opacity: ${scrolled ? '1' : '0'};
  transition: opacity 0.4s ease;
}

/* Brand */
.navbar-brand {
  position: relative;
  transition: transform 0.3s ease;
  padding: 0.5rem 0;
}

.navbar-brand:hover {
  transform: translateY(-2px);
}

.brand-logo {
  position: relative;
  transition: all 0.3s ease;
}

.brand-logo::before {
  content: '';
  position: absolute;
  inset: -3px;
  background: linear-gradient(135deg, #60a5fa, #3b82f6, #8b5cf6);
  border-radius: 50%;
  opacity: 0;
  filter: blur(8px);
  transition: opacity 0.3s ease;
}

.navbar-brand:hover .brand-logo::before {
  opacity: 0.6;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

.brand-text {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
  background: linear-gradient(135deg, #ffffff 0%, #93c5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
}

.navbar-brand:hover .brand-text {
  letter-spacing: 1px;
}

/* Navigation Links */
.navbar-nav {
  gap: 0.5rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  position: relative;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85) !important;
  padding: 0.6rem 1.2rem !important;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

/* Animated background on hover */
.nav-link::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.15), rgba(59, 130, 246, 0.15));
  transform: translate(-50%, -50%);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.nav-link:hover::before {
  width: 100%;
  height: 100%;
}

.nav-link:hover {
  color: #93c5fd !important;
  transform: translateY(-2px);
}

/* Underline effect */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #60a5fa, #3b82f6);
  transform: translateX(-50%);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
}

.nav-link:hover::after {
  width: 60%;
}

/* Active link */
.nav-link.active {
  color: #60a5fa !important;
  background: rgba(96, 165, 250, 0.1);
}

.nav-link.active::after {
  width: 60%;
}

/* Donate Button - Premium Style */
.nav-item .nav-link[href="/donate"] {
  background: linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%);
  color: white !important;
  font-weight: 600;
  padding: 0.6rem 1.5rem !important;
  border-radius: 25px;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);
  position: relative;
  overflow: hidden;
}

.nav-item .nav-link[href="/donate"]::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.nav-item .nav-link[href="/donate"]:hover::before {
  left: 100%;
}

.nav-item .nav-link[href="/donate"]:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.6);
}

.nav-item .nav-link[href="/donate"]::after {
  display: none;
}

/* Logout Link */
.logout-link {
  position: relative;
}

.logout-link:hover {
  color: #fca5a5 !important;
  background: rgba(252, 165, 165, 0.1);
}

/* Toggler Animation */
.navbar-toggler {
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  transition: all 0.3s ease;
}

.navbar-toggler:hover {
  border-color: rgba(96, 165, 250, 0.6);
  background: rgba(96, 165, 250, 0.1);
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0.2rem rgba(96, 165, 250, 0.25);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.85%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

/* Mobile Menu Animation */
.navbar-collapse {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (max-width: 991px) {
  .navbar-collapse {
    margin-top: 1rem;
    padding: 1.5rem;
    background: rgba(15, 23, 42, 0.95);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }

  .nav-link {
    margin: 0.4rem 0;
    text-align: left;
  }

  .nav-item .nav-link[href="/donate"] {
    margin-top: 1rem;
    text-align: center;
  }

  .navbar-nav {
    gap: 0.3rem;
  }
}

/* Smooth Entrance Animation */
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.navbar {
  animation: slideDown 0.5s ease-out;
}

/* Loading Bar Effect */
.navbar::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    #60a5fa 0%, 
    #3b82f6 25%, 
    #8b5cf6 50%, 
    #3b82f6 75%, 
    #60a5fa 100%
  );
  background-size: 200% 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.navbar.scrolled::after {
  opacity: 0.6;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Responsive Font Sizes */
@media (max-width: 768px) {
  .brand-text {
    font-size: 0.9rem;
  }
  
  .nav-link {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .brand-text {
    font-size: 0.8rem;
    line-height: 1.2;
  }
}

/* User Name Badge */
.user-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(59, 130, 246, 0.2));
  border: 1px solid rgba(96, 165, 250, 0.3);
  border-radius: 20px;
  font-size: 0.85rem;
  margin-left: 0.5rem;
  color: #93c5fd;
  font-weight: 500;
}

/* Accessibility */
.nav-link:focus-visible {
  outline: 2px solid #60a5fa;
  outline-offset: 4px;
  border-radius: 12px;
}
`}</style>

      <nav className={`navbar navbar-expand-lg ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid px-3 px-lg-4">
          {/* Brand */}
          <Link
            className="navbar-brand d-flex align-items-center"
            to="/"
            onClick={handleLinkClick}
          >
            <div className="brand-logo position-relative">
              <img
                src="logo.jpeg"
                alt="Logo"
                width="45"
                height="45"
                className="rounded-circle border border-2 border-warning me-2 p-1 bg-white"
              />
            </div>
            <span className="brand-text d-none d-sm-inline">
             WingsOfChange
            </span>
            <span className="brand-text d-inline d-sm-none" style={{fontSize: '0.75rem'}}>
              WOC Trust
            </span>
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={handleLinkClick}>
                  About
                </Link>
              </li>
                 <li className="nav-item">
                <Link className="nav-link" to="/chatbot" onClick={handleLinkClick}>
                  ChatBot
                </Link>
              </li>

              {/* Student links */}
              {isLoggedIn() && role === "student" && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/apply" onClick={handleLinkClick}>
                      Apply
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/results" onClick={handleLinkClick}>
                      Results
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/active-students"
                      onClick={handleLinkClick}
                    >
                      Active Students
                    </Link>
                  </li>
                </>
              )}

              <li className="nav-item">
                <Link className="nav-link" to="/donate" onClick={handleLinkClick}>
                  Donate
                </Link>
              </li>

              {isLoggedIn() && role === "admin" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin" onClick={handleLinkClick}>
                    Dashboard
                  </Link>
                </li>
              )}

              {!isLoggedIn() ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login" onClick={handleLinkClick}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register" onClick={handleLinkClick}>
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link
                    to="#"
                    onClick={handleLogout}
                    className="nav-link logout-link"
                  >
                    Logout
                    {user?.name && (
                      <span className="user-badge d-none d-lg-inline">
                        {user.name}
                      </span>
                    )}
                  </Link>
                </li>
              )}

              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={handleLinkClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div style={{ height: '80px' }}></div>
    </>
  );
}

export default Navbar;
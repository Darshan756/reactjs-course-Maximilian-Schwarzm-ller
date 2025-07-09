import React from 'react';
import './CoachingLetter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const CoachingLetter = () => {
  return (
    <div className="cover-letter-container">
      <div className="cover-letter-wrapper">
        <div className="cover-letter-navbar">
          <div className="cover-letter-logo">Logo</div>
          <div className="cover-letter-nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Tutors</a>
            <Link to="/login" className="cover-letter-login-btn">Login</Link>
            <Link to="/signup" className="cover-letter-signup-btn">Signup</Link>
          </div>
        </div>

        <div className="cover-letter-hero-section">
          <h1>Learn 1-on-1 with the Best Tutors</h1>
          <div className="cover-letter-hero-buttons">
            <button className="cover-letter-find-btn">Find a Tutor</button>
            <button className="cover-letter-become-btn">Become a Tutor</button>
          </div>
        </div>

        <div className="cover-letter-features">
          <div className="cover-letter-feature">
            <div className="cover-letter-feature-box teal"></div>
            <p>Personalized Coaching</p>
          </div>
          <div className="cover-letter-feature">
            <div className="cover-letter-feature-box yellow"></div>
            <p>Flexible Scheduling</p>
          </div>
          <div className="cover-letter-feature">
            <div className="cover-letter-feature-box pink"></div>
            <p>Secure Video Sessions</p>
          </div>
        </div>

        <div className="cover-letter-how-it-works">
          <h2>How It Works</h2>
          <div className="cover-letter-steps">
            <div className="cover-letter-step">
              <div className="cover-letter-step-number teal">1</div>
              <p>Sign Up</p>
            </div>
            <span className="cover-letter-arrow">→</span>
            <div className="cover-letter-step">
              <div className="cover-letter-step-number yellow">2</div>
              <p>Choose Tutor</p>
            </div>
            <span className="cover-letter-arrow">→</span>
            <div className="cover-letter-step">
              <div className="cover-letter-step-number pink">3</div>
              <p>Start 1-on-1 Session</p>
            </div>
          </div>
        </div>

        <div className="cover-letter-testimonials">
          <h2>Testimonials</h2>
          <div className="cover-letter-testimonial-box">
            <p></p>
          </div>
        </div>

        <div className="cover-letter-footer">
          <div className="cover-letter-footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
          <div className="cover-letter-footer-icons">
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingLetter;

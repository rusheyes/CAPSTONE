import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'; // Import only the necessary components from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import logoImage from '../images/logo.png';

const NavigationBar = ({ scrollToAboutUs, scrollToBlog, scrollToContactUs, scrollToHome }) => {
  const [showModal, setShowModal] = useState(false);
  const [userEmail, setUserEmail] = useState(''); // Add user email state
  const [userPassword, setUserPassword] = useState(''); // Add user password state

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here using userEmail and userPassword
    // For example, you can make an API request to authenticate the user
    // If login is successful, handle it accordingly
    // If login fails, show an error message to the user
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="navbar-logo" />
      </div>
      <button className={`nav-toggle ${navOpen ? 'open' : ''}`} onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isLoggedIn ? (
        <>
          <ul className={`nav-links ${navOpen ? 'open' : ''}`} id="navdes">
            <li>
              <a href="/CAPSTONE" onClick={handleHomeClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleAboutUsClick}>
                About Us
              </a>
            </li>
            <li>
              <a href="#blog" onClick={handleBlogClick}>
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleContactUsClick}>
                Contact Us
              </a>
            </li>
          </ul>
          <div className="user-auth">
            <img src={navProfilePic} alt="profilepic" className="navbar-logo2" />
            <span className="login-button">Hi, {getUsernameFromEmail(userEmail)}</span>
            <button className="signup-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <ul className={`nav-links ${navOpen ? 'open' : ''}`} id="navdes">
            <li>
              <a href="/CAPSTONE" onClick={handleHomeClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleAboutUsClick}>
                About Us
              </a>
            </li>
            <li>
              <a href="#blog" onClick={handleBlogClick}>
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleContactUsClick}>
                Contact Us
              </a>
            </li>
          </ul>
          <div className="user-auth">
            <button className="login-button" onClick={handleOpenModal}>
              Log In
            </button>
            <button className="signup-button" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </>
      )}
<Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Body>
          <div className="login-container">
            <Button type="button" className="close-button" onClick={handleCloseModal}>
              &times;
            </Button>
            <form onSubmit={handleSubmit} className="login-form">
              <Modal.Title>Log In</Modal.Title>
              <div>
                <input type="email" placeholder="Email" value={userEmail} onChange={handleEmailChange} />
                <input
                  type="password"
                  placeholder="Password"
                  value={userPassword}
                  onChange={handlePasswordChange}
                />
                <br />
                <br />
                <button type="submit">Log In</button>
                <br />
                <br />
                <p onClick={handleForgotPasswordClick} className="forgot-password-link">
                  Forgot Password?
                </p>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </nav>
  );
};

export default NavigationBar;

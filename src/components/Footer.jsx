import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../styles/main.css';

// Import your logo image
import logoImage from '../images/logo.png'; // Replace with the actual path to your logo image

const Footer = () => {
  const logoStyle = {
    width: '75%', // Adjust the width as needed
    height: 'auto', // This ensures that the aspect ratio is maintained
  };

  return (
    <footer className="py-4">
      <Container className="justify-content-center makedes mt-4">
        <Row className="brdes">
          <Col md={4} className="mb-2"> {/* Add the mb-3 class to set spacing */}
            <h5 className="no-bullets mb-3">Services</h5>
            <ul className="no-bullets">
              <li className="mb-2"><a href="https://www.keepsmartconsultancy.com/rmc-no-29-2019-update-on-accounting-books/">Updating of Books</a></li>
              <li className="mb-2"><a href="#https://www.keepsmartconsultancy.com/tax-compliance-and-bookkeeping-service/">Tax Remittance</a></li>
              <li className="mb-2"><a href="#https://www.keepsmartconsultancy.com/tax-compliance-and-bookkeeping-service/">Open-cases Settlement</a></li>
              <li className="mb-2"><a href="https://www.youtube.com/@eurekaytchannel4976/videos">Tax Seminars and Briefings</a></li>
              <li className="mb-2"><a href="https://www.bing.com/news/search?q=BIR+Tax+Updates&qpvt=bir+tax+updates&FORM=EWRE">BIR Tax Updates</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3"> {/* Add the mb-3 class to set spacing */}
            <h5 className="no-bullets mb-3">Company</h5>
            <ul className="no-bullets">
              <li className="mb-2"><a href="#about-link">About Us</a></li>
              <li className="mb-2"><a href="#press-link">Our Team</a></li>
              {/* Add more company links here */}
            </ul>
          </Col>
          <Col md={4} className="mb-3"> {/* Add the mb-3 class to set spacing */}
            <h5 className="no-bullets2 mb-3">Resources</h5>
            <ul className="no-bullets2">
              <li className="mb-2"><a href="https://kpmg.com/ph/en/home/insights/2021/11/bir-better-innovative-and-revolutionary.html">Blog</a></li>
              <li className="mb-2"><a href="https://www.bir.gov.ph/index.php/downloadables.html">Guides and Tools</a></li>
              <li className="mb-2"><a href="https://www.youtube.com/@eurekaytchannel4976/videos">Youtube Videos</a></li>
              <li className="mb-2"><a href="https://www.bir.gov.ph/">BIR Website</a></li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className="justify-content-center">
        <Row className="mt-3">
          <Col md={4} className="logo-container"> {/* Center the logo */}
            <img src={logoImage} alt="logo" style={logoStyle} /> {/* Apply the logoStyle */}
          </Col>
          <Col md={4} className="movades mt-5">
          <h5 className="centerdes2 mb-3">Connect with Us</h5>
              <ul className="list-inline">
                <li className="list-inline-item link-popup">
                  <a href="https://www.facebook.com/zalapi/" className="hover-facebook link-with-tooltip">
                    <FaFacebook size={24} />
                    <span className="link-tooltip">Zalapi</span>
                  </a>
                </li>
                <li className="list-inline-item link-popup">
                  <a href="https://www.instagram.com/zalapi/" className="hover-instagram link-with-tooltip">
                    <FaInstagram size={24} />
                    <span className="link-tooltip">ZalapiIG</span>
                  </a>
                </li>
                <li className="list-inline-item  link-popup">
                  <a href="https://twitter.com/zalapi" className="hover-twitter link-with-tooltip">
                    <FaTwitter size={24} />
                    <span className="link-tooltip">@zalapi</span>
                  </a>
                </li>
                <li className="list-inline-item link-popup">
                  <a href="https://www.linkedin.com/company/zalapi" className="hover-linkedin link-with-tooltip">
                    <FaLinkedin size={24} />
                    <span className="link-tooltip">zalapi</span>
                  </a>
                </li>
                <li className="list-inline-item link-popup">
                  <a href="/phone" className="hover-phone link-with-tooltip">
                    <FaPhone size={24} />
                    <span className="link-tooltip">09064172625</span>
                  </a>
                </li>
                <li className="list-inline-item link-popup">
                  <a href="mailto:zalapi@google.com" className="hover-mail link-with-tooltip">
                    <FaEnvelope size={24} />
                    <span className="link-tooltip">zalapi@google.com</span>
                  </a>
                </li>
              {/* Add more social media links here */}
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className="justify-content-center">
        <Row>
          <Col className="text-center copyright">
            <p>&copy; 2023 ZALAPI!. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navbar';
import AppHero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import CardComponent from '../components/NewBlog';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import LoginModal from '../components/LoginModal';
import RegistrationModal from '../components/RegistrationModal';
import RegistrationModal2 from '../components/RegistrationModal2'; // Import the RegistrationModal2 component
import '../styles/main.css';

const LandingPage = () => {
  const aboutUsRef = useRef(null);
  const blogRef = useRef(null);
  const contactUsRef = useRef(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSecondRegistrationModal, setShowSecondRegistrationModal] = useState(false);

  const scrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBlog = () => {
    if (blogRef.current) {
      blogRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContactUs = () => {
    if (contactUsRef.current) {
      contactUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const openSignUpModal = () => {
    setShowSignUpModal(true);
  };

  const closeSignUpModal = () => {
    setShowSignUpModal(false);
  };

  // Function to show the second registration modal
  const showSecondRegistration = () => {
    setShowSignUpModal(false); // Close the first registration modal
    setShowSecondRegistrationModal(true); // Show the second registration modal
  };

  return (
    <div className="App">
      <div className="sticky-navbar">
        <NavigationBar
          scrollToAboutUs={scrollToAboutUs}
          scrollToBlog={scrollToBlog}
          scrollToContactUs={scrollToContactUs}
          scrollToHome={scrollToHome}
          openLoginModal={openLoginModal}
          openSignUpModal={openSignUpModal} // Pass the openSignUpModal function
        />
      </div>
      <main id="home">
        <div>
          <div>
            <AppHero />
          </div>
          <div id="about">
            <AboutUs aboutUsRef={aboutUsRef} />
          </div>
          <div>
            <CardComponent blogRef={blogRef} />
          </div>
          <div>
            <ContactUs contactUsRef={contactUsRef} />
          </div>
        </div>
      </main>
      <footer className="py-4">
        <Footer />
      </footer>

      {/* Render the LoginModal */}
      {showLoginModal && <LoginModal onClose={closeLoginModal} />}

      {/* Render the RegistrationModal */}
      {showSignUpModal && <RegistrationModal onClose={closeSignUpModal} onNext={showSecondRegistration} />}

      {/* Render the Second Registration Modal */}
      {showSecondRegistrationModal && <RegistrationModal2 />}
    </div>
  );
};

export default LandingPage;







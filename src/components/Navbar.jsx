import React, { useState } from 'react';
import { Button, Modal, Container, Row, Col, Form, Dropdown, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import logoImage from '../images/logo.png';
import navProfilePic from '../images/profile.jpg';
import { FaShoppingCart } from 'react-icons/fa';

const NextButton = ({ onClick }) => (
  <Button className="rbuttondes" onClick={onClick}>
    Next
  </Button>
);

const NavigationBar = ({
  scrollToAboutUs,
  scrollToBlog,
  scrollToContactUs,
  scrollToHome,
  openLoginModal,
  handleLogout, 
  handleOpenSignUpModal
}) => {
  const [navOpen, setNavOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSecondRegistrationModal, setShowSecondRegistrationModal] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [files, setFiles] = useState(null);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [TPN, setTPN] = useState('');
  const [BTN, setBTN] = useState('');
  const [TIN, setTIN] = useState('');
  const [BAD, setBAD] = useState('');
  const [NUM, setNUM] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationAlertVisible, setRegistrationAlertVisible] = useState(false);
  const itemsData = [
    { id: 1, name: (<>Percentage<br />Tax</>), price: 'Php 4,000.00' },
    { id: 2, name: (<>Value-Added<br />Tax</>), price: 'Php 10,000.00' },
    { id: 3, name: (<>Excise<br />Tax</>), price: 'Php 6,000.00' },
    { id: 4, name: (<>Income<br />Tax</>), price: 'Php 20,000.00' },
    { id: 5, name: (<>Registration<br />Fee</>), price: 'Php 500.00' },
    { id: 6, name: 'Withholding - Business/VAT', price: 'Php 12,000.00' },
    { id: 7, name: 'Withholding-Expanded', price: 'Php 12,000.00' },
    { id: 8, name: 'Withholding-Compensation', price: 'Php 12,000.00' },
  ];

  const itemsData2 = [
    { id: 9, name: 'Annual Ending Inventory', price: 'Php 5,000.00' },
    { id: 10, name: 'Summary List of Sales', price: 'Php 5,000.00' },
    { id: 11, name: 'Summary List of Purchases', price: 'Php 5,000.00' },
    { id: 12, name: '1604C - Alphalist & Filing', price: 'Php 5,000.00' },
    { id: 13, name: '1604E - Alphalist & Filing', price: 'Php 5,000.00' },
    { id: 14, name: '0613 - TCVD Penalties', price: 'Php 1,000.00' },
    { id: 15, name: 'Updating Books of Accounts', price: 'Php 10,000.00' },
    { id: 16, name: 'Updated Seminars and Reviews', price: 'Php 3,000.00' },
  ];

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFiles(file);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAboutUsClick = (e) => {
    e.preventDefault();
    scrollToAboutUs();
    handleCloseModal();
  };

  const handleBlogClick = (e) => {
    e.preventDefault();
    scrollToBlog();
    handleCloseModal();
  };

  const handleContactUsClick = (e) => {
    e.preventDefault();
    scrollToContactUs();
    handleCloseModal();
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    handleCloseModal();
  };

  const handleForgotPasswordClick = async () => {
    // Validate the email
    if (!isEmailValid(Email)) {
      alert('Invalid email. Please enter a valid email.');
      return;
    }
  
    // Simulate sending a password reset email
    try {
      // Here, you would call your API or perform the necessary actions
      // to send a password reset email to the user's email address (email variable).
      // If the email is successfully sent, you can show a success alert.
      // For example:
      // await sendPasswordResetEmail(email);
  
      // Simulating a successful email sending
      alert('Password reset email has been sent.');
    } catch (error) {
      // Handle the error and show an error alert
      console.error('Error sending password reset email:', error);
      alert('An error occurred while sending the password reset email.');
    }
  };  

  const handleCloseModal = () => {
    setShowModal(false);
    setShowSignUpModal(false);
    setShowSecondRegistrationModal(false);
    setEmail('');
    setPassword('');
    setTPN('');
    setBTN('');
    setTIN('');
    setBAD('');
    setNUM('');
    setFiles(null); // Reset files state if you are using it
  };

  const handleOpenModal = () => {
    setShowModal(true);
    setShowSignUpModal(false);
    setShowSecondRegistrationModal(false);
  };

  const handleSignUpClick = () => {
    setShowModal(false);
    setShowSignUpModal(true);
    setShowSecondRegistrationModal(false);
  };

    const handleRegister = () => {
      // Validate the fields here, you can add your validation logic
      if (!Email || !Password || !TPN || !BTN || !TIN || !BAD || !NUM) {
        alert('Please fill in all fields.');
        return;
      }    
      setShowModal(false);
      setShowSignUpModal(false);
      setShowSecondRegistrationModal(true);
    };
  

    const handleRegister2 = async () => {
      try {
        const formData = new FormData();
        formData.append('Email', Email);
        formData.append('Password', Password);
        formData.append('TPN', TPN);
        formData.append('BTN', BTN);
        formData.append('TIN', TIN);
        formData.append('BAD', BAD);
        formData.append('NUM', NUM);
        formData.append('image', files); // Append the image file to the form data
    
        const response = await fetch('http://localhost:3000/api/register', {
          method: 'POST',
          body: formData,
        });
    
        const data = await response.json();
    
        if (response.ok) {
          setRegistrationSuccess(true);
          setRegistrationAlertVisible(true);
          alert(data.message);
          setShowSecondRegistrationModal(false); // Close the registration modal after successful registration
        } else {
          setRegistrationSuccess(false);
          setRegistrationAlertVisible(true);
          alert('Registration failed. Please try again.');
        }
      } catch (error) {
        console.error('Error during registration:', error);
        setRegistrationSuccess(false);
        setRegistrationAlertVisible(true);
        alert('An error occurred during registration. Please try again later.');
      }
    };  
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email, Password }), // Assuming you have Email and Password from your form inputs
      });

      if (response.ok) {
        const userData = await response.json();
        // Update UI with user data
        updateNavbar(userData.userData);
      } else {
        // Handle login failure
        console.log('Login failed');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error during login:', error);
    }
  };

  const updateNavbar = (userData) => {
    // Update UI to show profile pic, name, and logout button
    // For example, set state variables to trigger a re-render
    setProfilePic(userData.profilePic);
    setUserName(userData.name);
    setIsLoggedIn(true);
  };

  const isEmailValid = (Email) => {
    // Add your email validation logic here
    // For example, you can use a regular expression to validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(Email);
  };

  const isPasswordValid = (Password) => {
    // Add your password validation logic here
    // For example, you can check if the password meets certain criteria (e.g., length)
    return Password.length >= 6; // Example: Password must be at least 6 characters
  };

  const handleTINChange = (event) => {
    const inputValue = event.target.value.replace(/[^\d]/g, ''); // Remove non-digit characters
    const formattedValue = inputValue.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3');
    setTIN(formattedValue);
  };
  
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    const total = cartItems.reduce((accumulator, item) => {
      const priceValue = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
      return accumulator + priceValue;
    }, 0);

    return total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const getUsernameFromEmail = (mail) => {
    // Logic to extract username from the email address
    // For example:
    // const username = email.substring(0, email.indexOf('@'));
    const username = 'TPN'; // Replace this with your logic
    return username;
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
            <span className="login-button">Hi, {getUsernameFromEmail(Email)}</span>
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
      <Modal className="modaldes" show={showModal} onHide={handleCloseModal}>
        <Modal.Body>
          <div className="login-container">
            <Button type="button" className="close-button" onClick={handleCloseModal}>
              &times;
            </Button>
            <form onSubmit={handleSubmit} className="login-form">
              <Modal.Title>Log In</Modal.Title>
              <div>
                <input type="email" placeholder="Email" value={Email} onChange={handleEmailChange} />
                <input
                  type="password"
                  placeholder="Password"
                  value={Password}
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
      <Modal className="modaldes" show={showSignUpModal} onHide={handleCloseModal}>
        <Modal.Body>
          <div className={`registration ${showSignUpModal ? 'open' : ''}`}>
            <div className="registration-content">
              <Container>
                <Row>
                  <Col md={6}>
                    <div className="registration-form1">
                      <h2 className="registration-title text-center">Registration</h2>

                      <Form>
                        <Form.Group controlId="email">
                          <Form.Label className="text-left">Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                          />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="password">
                          <Form.Label className="text-left">Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Enter Password"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="new-password"
                          />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="TPN">
                          <Form.Label className="text-left">Taxpayer's Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Taxpayer's Name"
                            value={TPN}
                            onChange={(e) => setTPN(e.target.value)}
                            autoComplete="name"
                          />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="BTN">
                          <Form.Label className="text-left">Business Trade Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Business Trade Name"
                            value={BTN}
                            onChange={(e) => setBTN(e.target.value)}
                            autoComplete="organization"
                          />
                        </Form.Group>
                      </Form>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="registration-form2">
                      <Form>
                        <Form.Group controlId="TIN">
                          <Form.Label className="text-left">TIN</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter TIN"
                            value={TIN}  // Make sure this is correctly bound to the state variable
                            onChange={handleTINChange}
                            autoComplete="off"
                          />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="BAD">
                          <Form.Label className="text-left">Business Address</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Business Address"
                            value={BAD}
                            onChange={(e) => setBAD(e.target.value)}
                            autoComplete="street-address"
                          />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="NUM">
                          <Form.Label className="text-left">Contact Number</Form.Label>
                          <Form.Control
                            type="tel"
                            placeholder="Enter Contact Number"
                            value={NUM}
                            onChange={(e) => setNUM(e.target.value)}
                            autoComplete="tel"
                          />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="documentUpload">
                          <Form.Label className="text-left">Upload Copy of COR and DTI</Form.Label>
                          <Form.Control
                            type="file"
                            accept=".pdf, .jpg, .png"
                            onChange={handleFileChange} // Make sure this line is correct
                            multiple
                          />
                          <Form.Text className="text-muted">
                            Please upload scanned copies of required documents.
                          </Form.Text>
                        </Form.Group>
                        <br />
                        <NextButton onClick={handleRegister} />
                        <Button
                          type="button"
                          className="close-button2"
                          onClick={handleCloseModal}
                        >
                          &times;
                        </Button>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal className="modaldes3" show={showSecondRegistrationModal} onHide={handleCloseModal}>
      <Modal.Body>
        <div className="registration2">
          <Container className="containerdes">
            <Row>
              <Col md={6}>
                <div>
                  <h2 className="registration-title2">Desired Services</h2>
                </div>
              </Col>
              <Col md={6}>
                <div className="cart-container custom-cart-container">
                  <h3>Available Items</h3>
                  <div className="available-items-grid">
                    {itemsData.map((item) => (
                      <div className="item-card" key={item.id}>
                        <p>{item.name}</p>
                        <p>Price: {item.price}</p>
                        <button className="add-to-cart-button" onClick={() => addItemToCart(item)}>
                          Add to Cart
                        </button>
                      </div>
                    ))}
                  </div>
                  <h3 className="adjustdes">Other Services</h3>
                  <div className="available-items-grid">
                    {itemsData2.map((item) => (
                      <div className="item-card" key={item.id}>
                        <p>{item.name}</p>
                        <p className="item-price">Price: {item.price}</p>
                        <button className="add-to-cart-button" onClick={() => addItemToCart(item)}>
                          Add to Cart
                        </button>
                      </div>
                    ))}
                  </div>
                  <Dropdown className="custom-dropdown">
                      <Dropdown.Toggle variant="link" id="cart-dropdown-toggle">
                        <FaShoppingCart /> Cart{' '}
                        <Badge className="custom-badge">{cartItems.length}</Badge>
                      </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <div className="cart-items-dropdown">
                        {cartItems.map((item) => (
                          <div className="cart-item" key={item.id}>
                            <div className="item-details">
                              <p>{item.name}</p>
                              <p>Price: {item.price}</p>
                            </div>
                            <button className="remove-button" onClick={clearCart}>
                              Remove All
                            </button>
                          </div>
                        ))}
                        <div className="cart-total">
                          <p className="total-label">Total:</p>
                          <p className="total-amount">Php {getTotalPrice()}</p>
                        </div>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Col>
              <Button className="register-button" onClick={handleRegister2}>
                Register
              </Button>
              <Button
                  type="button"
                  className="close-button3"
                  onClick={handleCloseModal}
              >
                  &times;
              </Button>
            </Row>
          </Container>
        </div>
      </Modal.Body>
    </Modal>
    </nav>
  );
};

export default NavigationBar;

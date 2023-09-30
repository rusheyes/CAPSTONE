import React, { useState } from 'react';
import { Button, Modal, Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import logoImage from '../images/logo.png';

const SignUpReg = () => {
  const [showModal, setShowModal] = useState(false);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [TPN, setTPN] = useState('');
  const [BTN, setBTN] = useState('');
  const [TIN, setTIN] = useState('');
  const [BAD, setBAD] = useState('');
  const [NUM, setNUM] = useState('');
  const [files, setFiles] = useState(null);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFiles(file);
  };

  const handleTINChange = (event) => {
    const inputValue = event.target.value.replace(/[^\d]/g, '');
    const formattedValue = inputValue.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3');
    setTIN(formattedValue);
  };

  const handleRegister = () => {
    // Validate the fields here, you can add your validation logic
    if (!Email || !Password || !TPN || !BTN || !TIN || !BAD || !NUM || !files) {
      alert('Please fill in all fields and upload required documents.');
      return;
    }
    // Your registration logic here
    setShowModal(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="navbar-logo" />
      </div>
      <Modal className="modaldes" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Body>
          <div className={`registration ${showModal ? 'open' : ''}`}>
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
                            onChange={handleFileChange}
                            multiple
                          />
                          <Form.Text className="text-muted">
                            Please upload scanned copies of required documents.
                          </Form.Text>
                        </Form.Group>
                        <br />
                        <Button variant="primary" onClick={handleRegister}>Register</Button>
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
    </nav>
  );
};

export default SignUpReg;

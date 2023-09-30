import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import '../styles/main.css';

const ContactForm = ({ contactUsRef }) => {
  const [name, setName] = useState(localStorage.getItem('name') || ''); // Get name from local storage
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStep, setFormStep] = useState(0);

  useEffect(() => {
    // Save the name to local storage whenever it changes
    localStorage.setItem('name', name);
  }, [name]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formStep === 0) {
      setFormStep(1);
    } else if (formStep === 1) {
      setFormStep(2);
    } else if (formStep === 2) {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      setEmail('');
      setMessage('');

      window.alert('Thank You!\nWe have received your query. We will get back to you in 24 hours.');

      // Close the alert and reset the form to the 1st step
      setFormStep(0);
    }
  };

  const [inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={contactUsRef}>
      <div className="contact-form">
        <div className="form-wrapper">
          <Form onSubmit={handleSubmit}>
            <h2 className='contactdes'>
              Contact Us
            </h2>

            {formStep === 0 && (
              <>
                <Form.Group controlId="name">
                  <Form.Label className={`typewriter ${inView ? 'typewriter-visible' : ''}`}>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Your Name"
                    required
                    autoComplete="name"
                  />
                </Form.Group>
                <br></br>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: 'rgba(51, 71, 91, 1)',
                    color: '#fff',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#00a4bd';
                    e.target.style.color = 'black';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(51, 71, 91, 1)';
                    e.target.style.color = '#fff';
                  }}
                >
                  {formStep === 2 ? 'Send' : 'Next'}
                </Button>
              </>
            )}

            {formStep === 1 && (
              <>
                <Form.Group controlId="email">
                  <Form.Label className={`typewriter ${inView ? 'typewriter-visible' : ''}`}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Your Email"
                    required
                    autoComplete="email"
                  />
                </Form.Group>
                <br></br>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: 'rgba(51, 71, 91, 1)',
                    color: '#fff',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#00a4bd')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = 'rgba(51, 71, 91, 1)')}
                >
                  {formStep === 2 ? 'Send' : 'Next'}
                </Button>
              </>
            )}

            {formStep === 2 && (
              <>
                <Form.Group controlId="message">
                  <Form.Label className={`typewriter ${inView ? 'typewriter-visible' : ''}`}>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Your Message"
                    required
                    autoComplete="off"
                  />
                </Form.Group>
                <br></br>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: 'rgba(51, 71, 91, 1)',
                    color: '#fff',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#00a4bd')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = 'rgba(51, 71, 91, 1)')}
                >
                  {formStep === 2 ? 'Send' : 'Next'}
                </Button>
              </>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

import React, { useState } from 'react';
import { Button, Modal, Container, Row, Col, Dropdown, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import logoImage from '../images/logo.png';
import { FaShoppingCart } from 'react-icons/fa';

const NxtReg = ({ handleOpenSignUpModal }) => {
  const [showSecondRegistrationModal, setShowSecondRegistrationModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const itemsData = [
    { id: 1, name: 'Percentage Tax', price: 'Php 4,000.00' },
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

  const handleCloseModal = () => {
    setShowSecondRegistrationModal(false);
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

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="navbar-logo" />
      </div>
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
                <Button className="register-button" onClick={handleOpenSignUpModal}>
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

export default NxtReg;

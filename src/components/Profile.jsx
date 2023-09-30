import React, { useState } from 'react';
import '../styles/dashboard.css';

function Profile() {
  const [profileInfo, setProfileInfo] = useState({
    email: 'dummy@gmail.com',
    password: 'password',
    firstName: 'John',
    lastName: 'Doe',
    TIN: '123-456-789',
    BTN: 'JD Enterprises',  
    phone: '032-577-5059',
    location: 'New York St., V&G Subdivision, Tacloban City',
    services: 'Percentage Tax, Income Tax, Registration Fee, Annual Ending Inventory, 0613 - TCVD Penalties, Updating of Books of Accounts',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to send the updated profile information to the server.
    console.log('Updated profile information:', profileInfo);
  };

  return (
    <div className="profile-container">
      <h1>Edit Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profileInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={profileInfo.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={profileInfo.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={profileInfo.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="BTN">Business Trade Name:</label>
          <input
            type="text"
            id="BTN"
            name="BTN"
            value={profileInfo.BTN}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="TIN">Taxpayer's Identification Number:</label>
          <input
            type="text"
            id="TIN"
            name="TIN"
            value={profileInfo.TIN}
            onChange={handleChange}
          />
        </div>
       <div className="form-group">
          <label htmlFor="location">Business Address:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={profileInfo.location}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={profileInfo.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="services">Services Availed:</label>
          <textarea
            id="text"
            name="services"
            value={profileInfo.services}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default Profile;

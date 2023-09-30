import React from 'react';

const RegistrationModal = ({ onClose, onRegister }) => {
  const handleNext = () => {
    // Handle registration logic here, then open the second registration modal
    onRegister();
  };

  return (
    <div>
      <h2>Registration Modal - Step 1</h2>
      {/* Your registration form fields */}
      <button onClick={handleNext}>Next</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default RegistrationModal;




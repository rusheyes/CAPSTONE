import React from 'react';

const SecondRegistrationModal = ({ onClose }) => {
  return (
    <div>
      <h2>Second Registration Modal</h2>
      {/* Additional registration steps or form fields */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default SecondRegistrationModal;


import React from 'react';

const EmailField = ({ label, placeholder }) => (
  <div>
    <label>{label}</label>
    <input type="email" placeholder={placeholder} />
  </div>
);

export default EmailField;

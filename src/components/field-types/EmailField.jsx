import React from 'react';

const EmailField = ({ label }) => (
  <div>
    <label>{label}</label>
    <input type="email" placeholder={label} />
  </div>
);

export default EmailField;

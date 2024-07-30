import React from 'react';

const NumberField = ({ label, placeholder }) => (
  <div>
    <label>{label}</label>
    <input type="number" placeholder={placeholder} />
  </div>
);

export default NumberField;

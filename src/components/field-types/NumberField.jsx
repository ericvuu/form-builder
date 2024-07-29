import React from 'react';

const NumberField = ({ label }) => (
  <div>
    <label>{label}</label>
    <input type="number" placeholder={label} />
  </div>
);

export default NumberField;

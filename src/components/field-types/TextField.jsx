import React from 'react';

const TextField = ({ label }) => (
  <div>
    <label>{label}</label>
    <input type="text" placeholder={label} />
  </div>
);

export default TextField;

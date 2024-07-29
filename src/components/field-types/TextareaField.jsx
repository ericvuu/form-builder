import React from 'react';

const TextareaField = ({ label }) => (
  <div>
    <label>{label}</label>
    <textarea placeholder={label} />
  </div>
);

export default TextareaField;

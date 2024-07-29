import React from 'react';

const SelectField = ({ label, options }) => (
  <div>
    <label>{label}</label>
    <select>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default SelectField;

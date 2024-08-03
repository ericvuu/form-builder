import React from 'react';
import PropTypes from 'prop-types';

const DateField = ({ label}) => (
  <div>
    <label>{label}</label>
    <input type="date"/>
  </div>
);

DateField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default DateField;

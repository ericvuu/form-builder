import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ label, placeholder }) => (
  <div>
    <label>{label}</label>
    <input type="text" placeholder={placeholder} />
  </div>
);

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default TextField;

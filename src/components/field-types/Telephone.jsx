import React from 'react';
import PropTypes from 'prop-types';

const Telephone = ({ label }) => (
  <div>
    <label>{label}</label>
    <input type="tel"/>
  </div>
);

Telephone.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Telephone;

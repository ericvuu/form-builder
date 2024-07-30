import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, checked, onChange }) => (
  <label style={{ display: 'block', marginBottom: '4px' }}>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      style={{ marginRight: '8px' }}
    />
    {label}
  </label>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;

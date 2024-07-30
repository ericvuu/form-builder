import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

const CheckboxGroup = ({ options, selectedOptions, onChange }) => {
  const handleCheckboxChange = (value) => {
    const updatedSelectedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter(option => option !== value)
      : [...selectedOptions, value];
    onChange(updatedSelectedOptions);
  };

  return (
    <div>
      {options.map(option => (
        <Checkbox
          key={option}
          label={option}
          checked={selectedOptions.includes(option)}
          onChange={() => handleCheckboxChange(option)}
        />
      ))}
    </div>
  );
};

CheckboxGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckboxGroup;

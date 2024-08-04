import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CheckboxGroup from './field-types/CheckboxGroup';
import "../assets/css/EditFieldModel.css";

const EditFieldModal = ({ field, onClose, onSave }) => {
  const [updatedField, setUpdatedField] = useState({ ...field });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxGroupChange = (selectedOptions) => {
    setUpdatedField((prev) => ({
      ...prev,
      selectedOptions,
    }));
  };

  const addCheckboxOption = () => {
    setUpdatedField((prev) => ({
      ...prev,
      options: [...(prev.options || []), '']
    }));
  };

  const removeCheckboxOption = (index) => {
    setUpdatedField((prev) => ({
      ...prev,
      options: (prev.options || []).filter((_, i) => i !== index),
    }));
  };

  const handleOptionChange = (index, value) => {
    setUpdatedField((prev) => ({
      ...prev,
      options: (prev.options || []).map((option, i) =>
        i === index ? value : option
      ),
    }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(updatedField);
    }
  };

  return (
    <div
      className="edit-field-model">
      <h3>Edit Field</h3>
      <label>
        Label:
        <input
          type="text"
          name="label"
          value={updatedField.label || ''}
          onChange={handleChange}
        />
      </label>
      {updatedField.type === 'text' && (
        <>
          <label>
            Placeholder:
            <input
              type="text"
              name="placeholder"
              value={updatedField.placeholder || ''}
              onChange={handleChange}
            />
          </label>
        </>
      )}
      {updatedField.type === 'select' && (
        <>
          <label>
            Options (comma separated):
            <input
              type="text"
              name="options"
              value={(updatedField.options || []).join(', ')}
              onChange={(e) => handleChange({
                target: {
                  name: 'options',
                  value: e.target.value.split(',').map(opt => opt.trim()),
                }
              })}
            />
          </label>
        </>
      )}
      {updatedField.type === 'checkbox-group' && (
        <>
          <div>
            <label>Options:</label>
            <CheckboxGroup
              options={updatedField.options || []}
              selectedOptions={updatedField.selectedOptions || []}
              onChange={handleCheckboxGroupChange}
            />
            <button onClick={addCheckboxOption}>Add Option</button>
            {updatedField.options && updatedField.options.map((option, index) => (
              <div key={index} style={{ marginBottom: '8px' }}>
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                />
                <button onClick={() => removeCheckboxOption(index)} style={{ marginLeft: '8px' }}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        </>
      )}
      {updatedField.type === 'paragraph' && (
        <>
          <label>
            Text:
            <textarea
              name="text"
              value={updatedField.text || ''}
              onChange={handleChange}
            />
          </label>
        </>
      )}
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleSave} style={{ marginRight: '10px' }}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

EditFieldModal.propTypes = {
  field: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    selectedOptions: PropTypes.arrayOf(PropTypes.string),
    text: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditFieldModal;

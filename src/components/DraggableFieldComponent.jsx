import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import TextField from './field-types/TextField';
import NumberField from './field-types/NumberField';
import EmailField from './field-types/EmailField';
import TextareaField from './field-types/TextareaField';
import SelectField from './field-types/SelectField';
import Paragraph from './field-types/Paragraph';
import CheckboxGroup from './field-types/CheckboxGroup';
import EditFieldModal from './EditFieldModal';

const ItemTypes = {
  FIELD: 'FIELD',
};

const DraggableFieldComponent = ({ field, index, moveField, removeField, updateField }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [, ref] = useDrag({
    type: ItemTypes.FIELD,
    item: { id: field.id, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.FIELD,
    hover: (item) => {
      if (item.index !== index) {
        moveField(item.index, index);
        item.index = index;
      }
    },
  });

  const handleModalSave = (updatedField) => {
    if (typeof updateField === 'function') {
      updateField(field.id, updatedField);
      setIsEditing(false);
    } else {
      console.error('updateField is not a function');
    }
  };

  return (
    <>
      <div
        ref={(node) => ref(drop(node))}
        style={{
          padding: '8px',
          border: '1px solid black',
          marginBottom: '10px',
          backgroundColor: 'white',
          cursor: 'move',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          {field.type === 'text' && <TextField label={field.label} placeholder={field.placeholder} />}
          {field.type === 'number' && <NumberField label={field.label} />}
          {field.type === 'email' && <EmailField label={field.label} />}
          {field.type === 'textarea' && <TextareaField label={field.label} />}
          {field.type === 'select' && <SelectField label={field.label} options={field.options} />}
          {field.type === 'paragraph' && <Paragraph text={field.text} />}
          {field.type === 'checkbox-group' && (
            <CheckboxGroup
              options={field.options || []}
              selectedOptions={field.selectedOptions || []}
              onChange={(updatedSelectedOptions) => {
                handleModalSave({ ...field, selectedOptions: updatedSelectedOptions });
              }}
            />
          )}
        </div>
        <div>
          <button
            onClick={() => setIsEditing(true)}
            style={{
              marginLeft: '10px',
              padding: '4px 8px',
              border: 'none',
              backgroundColor: 'blue',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
          >
            Edit
          </button>
          <button
            onClick={() => removeField(field.id)}
            style={{
              marginLeft: '10px',
              padding: '4px 8px',
              border: 'none',
              backgroundColor: 'red',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
          >
            Remove
          </button>
        </div>
      </div>
      {isEditing && (
        <EditFieldModal
          field={field}
          onClose={() => setIsEditing(false)}
          onSave={handleModalSave}
        />
      )}
    </>
  );
};

DraggableFieldComponent.propTypes = {
  field: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    selectedOptions: PropTypes.arrayOf(PropTypes.string),
    text: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  moveField: PropTypes.func.isRequired,
  removeField: PropTypes.func.isRequired,
  updateField: PropTypes.func.isRequired,
};

export default DraggableFieldComponent;

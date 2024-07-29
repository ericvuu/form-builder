import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import TextField from './field-types/TextField';
import NumberField from './field-types/NumberField';
import EmailField from './field-types/EmailField';
import TextareaField from './field-types/TextareaField';
import SelectField from './field-types/SelectField';

const ItemTypes = {
  FIELD: 'FIELD',
};

const DraggableFieldComponent = ({ field, index, moveField, removeField }) => {
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

  return (
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
        {field.type === 'text' && <TextField label={field.label} />}
        {field.type === 'number' && <NumberField label={field.label} />}
        {field.type === 'email' && <EmailField label={field.label} />}
        {field.type === 'textarea' && <TextareaField label={field.label} />}
        {field.type === 'select' && <SelectField label={field.label} options={field.options} />}
      </div>
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
  );
};

DraggableFieldComponent.propTypes = {
  field: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number.isRequired,
  moveField: PropTypes.func.isRequired,
  removeField: PropTypes.func.isRequired,
};

export default DraggableFieldComponent;

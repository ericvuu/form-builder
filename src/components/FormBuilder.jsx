import React, { useState, useCallback } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import TextField from './field-types/TextField';
import NumberField from './field-types/NumberField';
import EmailField from './field-types/EmailField';
import TextareaField from './field-types/TextareaField';
import SelectField from './field-types/SelectField';
import DraggableField from './DraggableField';

const ItemTypes = {
  FIELD: 'FIELD',
};

const FormBuilder = () => {
  const [fields, setFields] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.FIELD,
    drop: (item) => addField(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addField = (item) => {
    setFields((prevFields) => [
      ...prevFields,
      { ...item, id: Date.now().toString() },
    ]);
  };

  const removeField = (id) => {
    setFields((prevFields) => prevFields.filter((field) => field.id !== id));
  };

  const moveField = useCallback((dragIndex, hoverIndex) => {
    const updatedFields = [...fields];
    const [draggedField] = updatedFields.splice(dragIndex, 1);
    updatedFields.splice(hoverIndex, 0, draggedField);
    setFields(updatedFields);
  }, [fields]);

  const renderField = (field, index) => {
    switch (field.type) {
      case 'text':
        return <TextField key={field.id} label={field.label} />;
      case 'number':
        return <NumberField key={field.id} label={field.label} />;
      case 'email':
        return <EmailField key={field.id} label={field.label} />;
      case 'textarea':
        return <TextareaField key={field.id} label={field.label} />;
      case 'select':
        return <SelectField key={field.id} label={field.label} options={field.options} />;
      default:
        return null;
    }
  };

  const DraggableFieldComponent = ({ field, index }) => {
    const [, ref] = useDrag({
      type: ItemTypes.FIELD,
      item: { index },
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
          {renderField(field, index)}
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

  return (
    <div
      ref={drop}
      style={{
        minHeight: '300px',
        width: '100%',
        border: '2px solid black',
        backgroundColor: isOver ? 'lightgreen' : 'white',
        padding: '16px',
      }}
    >
      {isOver ? 'Release to drop' : 'Drag fields here to build your form'}
      <div style={{ marginTop: '10px' }}>
        {fields.map((field, index) => (
          <DraggableFieldComponent
            key={field.id}
            index={index}
            field={field}
          />
        ))}
      </div>
    </div>
  );
};

export default FormBuilder;

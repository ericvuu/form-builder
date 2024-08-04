import React, { useState, useCallback } from 'react';
import { useDrop } from 'react-dnd';
import DraggableFieldComponent from './DraggableFieldComponent';
import "../assets/css/FormBuilder.css";

const ItemTypes = {
  FIELD: 'FIELD',
};

const FormBuilder = () => {
  const [fields, setFields] = useState([]);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.FIELD,
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const handleDrop = (item) => {
    if (!item || !item.id) {
      console.error('Invalid item dropped:', item);
      return;
    }

    const existingField = fields.find(field => field.id === item.id);
    if (existingField) {
      console.log('Field already exists, not adding a new one.');
      return;
    }

    const newField = { ...item, id: Date.now().toString() };
    setFields((prevFields) => [...prevFields, newField]);
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

  const updateField = (id, updatedField) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, ...updatedField } : field
      )
    );
  };

  return (
    <div
      className="form-container"
      ref={drop}
      style={{
        backgroundColor: isOver ? 'lightgreen' : 'white',
      }}
    >
      {isOver ? 'Release to drop' : 'Drag fields here to build your form'}
      <div style={{ marginTop: '10px' }}>
        {fields.map((field, index) => (
          <DraggableFieldComponent
            key={field.id}
            index={index}
            field={field}
            moveField={moveField}
            removeField={removeField}
            updateField={updateField}
          />
        ))}
      </div>
    </div>
  );
};

export default FormBuilder;

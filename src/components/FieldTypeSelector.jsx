import React from 'react';
import DraggableField from './DraggableField';

const FieldTypeSelector = () => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Field Types</h2>
      <DraggableField id="text" type="text" label="Text Field" />
      <DraggableField id="number" type="number" label="Number Field" />
      <DraggableField id="email" type="email" label="Email Field" />
      <DraggableField id="textarea" type="textarea" label="Textarea Field" />
      <DraggableField
        id="select"
        type="select"
        label="Select Field"
        options={['Option 1', 'Option 2', 'Option 3']}
      />
    </div>
  );
};

export default FieldTypeSelector;

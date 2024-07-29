import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import FormBuilder from './components/FormBuilder';
import FieldTypeSelector from './components/FieldTypeSelector';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ padding: '20px' }}>
        <FieldTypeSelector />
        <FormBuilder />
      </div>
    </DndProvider>
  );
}

export default App;

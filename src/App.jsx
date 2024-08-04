import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import FormBuilder from './components/FormBuilder';
import FieldTypeSelector from './components/FieldTypeSelector';
import "./App.css"

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="form-builder container">
        <FieldTypeSelector />
        <FormBuilder />
      </div>
    </DndProvider>
  );
}

export default App;

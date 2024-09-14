import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FormBuilder from "./components/FormBuilder";
import FieldTypeSelector from "./components/FieldTypeSelector";
import FormColumnToggle from "./components/FormColumnToggle";
import "./App.css";

function App() {
  const [isTwoColumn, setIsTwoColumn] = useState(false);

  const toggleLayout = () => {
    setIsTwoColumn((prev) => !prev);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="form-builder-page">
        <div className="form-builder-wrapper">
          <div className="builder-controls">
            <FormColumnToggle
              isTwoColumn={isTwoColumn}
              toggleLayout={toggleLayout}
            />
            <FieldTypeSelector />
          </div>
          <FormBuilder isTwoColumn={isTwoColumn} />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;

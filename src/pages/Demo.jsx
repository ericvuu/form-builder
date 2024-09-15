import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FormBuilder from "../components/FormBuilder";
import FieldTypeSelector from "../components/FieldTypeSelector";
import FormColumnToggle from "../components/FormColumnToggle";
import FormPreview from "../components/FormPreview";

const Demo = () => {
  const [isTwoColumn, setIsTwoColumn] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [fields, setFields] = useState([]);

  const toggleLayout = () => {
    setIsTwoColumn((prev) => !prev);
  };

  const togglePreview = () => {
    setIsPreview((prev) => !prev);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="form-builder-page">
        <div className="form-builder-wrapper">
          <div className="builder-controls">
            <button onClick={togglePreview} className="btn-preview">
              {isPreview ? "Back to Edit" : "Preview Form"}
            </button>
            <FormColumnToggle
              isTwoColumn={isTwoColumn}
              toggleLayout={toggleLayout}
            />
            <FieldTypeSelector />
          </div>
          {isPreview ? (
            <FormPreview fields={fields} isTwoColumn={isTwoColumn} />
          ) : (
            <FormBuilder
              isTwoColumn={isTwoColumn}
              fields={fields}
              setFields={setFields}
            />
          )}
        </div>
      </div>
    </DndProvider>
  );
};

export default Demo;

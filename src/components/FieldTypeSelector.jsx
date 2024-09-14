import React from "react";
import { useDrag } from "react-dnd";
import "../assets/css/FieldTypeSelector.css";

const ItemTypes = {
  FIELD: "FIELD",
};

const FieldTypeSelector = () => {
  const fields = [
    { id: "paragraph", type: "paragraph", label: "Paragraph Field" },
    { id: "text", type: "text", label: "Text Field" },
    { id: "telephone", type: "tel", label: "Telephone Field" },
    { id: "date", type: "date", label: "Date Field" },
    { id: "number", type: "number", label: "Number Field" },
    { id: "email", type: "email", label: "Email Field" },
    { id: "textarea", type: "textarea", label: "Textarea Field" },
    {
      id: "select",
      type: "select",
      label: "Select Field",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      id: "checkbox-group",
      type: "checkbox-group",
      label: "Checkbox Group",
      options: ["Option A", "Option B", "Option C"],
    },
  ];

  return (
    <div className="field-type-selector" style={{ marginBottom: "20px" }}>
      <h2>Field Types</h2>
      {fields.map((field) => (
        <DraggableFieldType key={field.id} field={field} />
      ))}
    </div>
  );
};

const DraggableFieldType = ({ field }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.FIELD,
    item: field,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="draggable-field"
      style={{
        opacity: isDragging ? 0.5 : 1
      }}
    >
      <strong>{field.label}</strong>
      {field.type === "select" && field.options?.length > 0 && (
        <div style={{ marginTop: "4px", fontSize: "0.9em", color: "#555" }}>
          {field.options.join(", ")}
        </div>
      )}
      {field.type === "checkbox-group" && field.options?.length > 0 && (
        <div style={{ marginTop: "4px", fontSize: "0.9em", color: "#555" }}>
          {field.options.join(", ")}
        </div>
      )}
    </div>
  );
};

export default FieldTypeSelector;

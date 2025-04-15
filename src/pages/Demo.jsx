import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FormBuilder from "../components/FormBuilder";
import FieldTypeSelector from "../components/FieldTypeSelector";
import FormColumnToggle from "../components/FormColumnToggle";
import FormPreview from "../components/FormPreview";

const exportForm = (fields, isTwoColumn) => {
  const htmlFields = fields
    .map((field) => {
      switch (field.type) {
        case "text":
        case "email":
        case "tel":
        case "number":
        case "date":
          return `<label>${field.label}
            <input name="${field.label}" type="${field.type}" placeholder="${
            field.placeholder || ""
          }" />
          </label>`;
        case "textarea":
          return `<label>${field.label}
            <textarea name="${field.label}" placeholder="${
            field.placeholder || ""
          }"></textarea>
          </label>`;
        case "select":
          return `<label>${field.label}
            <select name="${field.label}">
              ${(field.options || [])
                .map((opt) => `<option value="${opt}">${opt}</option>`)
                .join("")}
            </select>
          </label>`;
        case "checkbox-group":
          return `
            <fieldset>
              <legend>${field.label}</legend>
              ${(field.options || [])
                .map(
                  (opt) => `
                <label>
                  <input type="checkbox" name="${field.label}" value="${opt}" />
                  ${opt}
                </label>
              `
                )
                .join("")}
            </fieldset>
          `;
        case "paragraph":
          return `<p>${field.text}</p>`;
        default:
          return "";
      }
    })
    .join("\n");

  const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Exported Form</title>
  <style>
    body { font-family: sans-serif; padding: 2rem; }
    form {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    form > * {
      flex: 1 1 ${isTwoColumn ? "calc(50% - 1rem)" : "100%"};
      box-sizing: border-box;
    }
    input, textarea, select {
      width: 100%;
      padding: 8px;
      font-size: 1rem;
    }
    label {
      font-weight: bold;
      display: block;
    }
    fieldset {
      margin-bottom: 1rem;
      width: 100%;
    }
    .submit-container {
      flex: 1 1 100%;
      margin-top: 2rem;
    }
  </style>
</head>
<body>
  <form id="exported-form">
    ${htmlFields}
    <div class="submit-container">
      <button type="submit">Submit</button>
    </div>
  </form>

  <script>
    document.getElementById("exported-form").addEventListener("submit", async function(event) {
      event.preventDefault();

      const formData = new FormData(event.target);
      const payload = {};

      for (const [key, value] of formData.entries()) {
        if (payload[key]) {
          if (Array.isArray(payload[key])) {
            payload[key].push(value);
          } else {
            payload[key] = [payload[key], value];
          }
        } else {
          payload[key] = value;
        }
      }

      try {
        const response = await fetch("https://your-api-endpoint.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          alert("Form submitted successfully!");
        } else {
          alert("Submission failed. Please try again.");
        }
      } catch (error) {
        alert("An error occurred: " + error.message);
      }
    });
  </script>
</body>
</html>
  `;

  const blob = new Blob([htmlTemplate], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "exported-form.html";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

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
            <button
              onClick={() => exportForm(fields, isTwoColumn)}
              className="btn-white"
            >
              Export HTML + JS
            </button>
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

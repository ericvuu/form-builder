import React from "react";
import TextField from "./field-types/TextField";
import DateField from "./field-types/DateField";
import Telephone from "./field-types/Telephone";
import NumberField from "./field-types/NumberField";
import EmailField from "./field-types/EmailField";
import TextareaField from "./field-types/TextareaField";
import SelectField from "./field-types/SelectField";
import Paragraph from "./field-types/Paragraph";
import CheckboxGroup from "./field-types/CheckboxGroup";
import "../assets/css/FormPreview.css";

const FormPreview = ({ fields, isTwoColumn }) => {
  return (
    <div className="form-preview">
      <div className="form-preview-container">
        <form className="form" action="#">
          <div className="form-field-container">
            {fields.map((field) => (
              <div
                key={field.id}
                className="form-preview-field"
                style={{
                  flex: isTwoColumn ? "1 0 calc(40% - 10px)" : "1 0 100%",
                }}
              >
                {field.type === "text" && (
                  <TextField
                    label={field.label}
                    placeholder={field.placeholder}
                    disabled
                  />
                )}
                {field.type === "date" && (
                  <DateField label={field.label} disabled />
                )}
                {field.type === "tel" && (
                  <Telephone label={field.label} disabled />
                )}
                {field.type === "number" && (
                  <NumberField label={field.label} disabled />
                )}
                {field.type === "email" && (
                  <EmailField label={field.label} disabled />
                )}
                {field.type === "textarea" && (
                  <TextareaField
                    label={field.label}
                    placeholder={field.placeholder}
                    disabled
                  />
                )}
                {field.type === "select" && (
                  <SelectField
                    label={field.label}
                    options={field.options}
                    disabled
                  />
                )}
                {field.type === "paragraph" && <Paragraph text={field.text} />}
                {field.type === "checkbox-group" && (
                  <CheckboxGroup
                    options={field.options || []}
                    selectedOptions={field.selectedOptions || []}
                    disabled
                  />
                )}
              </div>
            ))}
            <div className="submit-container">
              <input className="btn-black" type="submit" value="Submit"></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPreview;

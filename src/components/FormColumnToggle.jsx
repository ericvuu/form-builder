import React from "react";

const FormColumnToggle = ({ isTwoColumn, toggleLayout }) => {
  return (
    <button
      className="column-toggle"
      onClick={toggleLayout}
    >
      {isTwoColumn ? "Switch to Single Column" : "Switch to Two Columns"}
    </button>
  );
};

export default FormColumnToggle;

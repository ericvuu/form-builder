import React from 'react';

const Paragraph = ({ text }) => (
  <div>
    <p>{text ?? "Paragraph"}</p>
  </div>
);

export default Paragraph;

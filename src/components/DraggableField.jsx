import React from 'react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';
import "../assets/css/DraggableField.css";

const DraggableField = ({ id, type, label, options = [], text }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FIELD',
    item: { id, type, label, options, text },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      className="draggable-field"
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <strong>{label}</strong>
      {type === 'select' && options.length > 0 && (
        <div style={{ marginTop: '4px', fontSize: '0.9em', color: '#555' }}>
          {options.join(', ')}
        </div>
      )}
      {type === 'paragraph' && text && (
        <div style={{ marginTop: '4px', fontSize: '0.9em', color: '#555' }}>
          {text}
        </div>
      )}
      {type === 'checkbox-group' && options.length > 0 && (
        <div style={{ marginTop: '4px' }}>
          {options.map((option, index) => (
            <label key={index} style={{ display: 'block' }}>
              <input type="checkbox" disabled aria-label={`Checkbox for ${option}`} /> {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

DraggableField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string,
};

export default DraggableField;

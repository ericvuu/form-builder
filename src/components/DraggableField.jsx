import React from 'react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';

const DraggableField = ({ id, type, label, options = [] }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FIELD',
    item: { id, type, label, options },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        border: '1px solid black',
        padding: '8px',
        backgroundColor: 'white',
        cursor: 'move',
        marginBottom: '10px',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <strong>{label}</strong>
      {type === 'select' && options.length > 0 && (
        <div style={{ marginTop: '4px', fontSize: '0.9em', color: '#555' }}>
          {options.join(', ')}
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
};

export default DraggableField;

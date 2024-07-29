import React from 'react';
import { useDrop } from 'react-dnd';

const DropTarget = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        height: '200px',
        width: '400px',
        border: '2px solid black',
        backgroundColor: isOver ? 'lightgreen' : 'white',
        padding: '16px',
      }}
    >
      {isOver ? 'Release to drop' : 'Drag items here'}
    </div>
  );
};

export default DropTarget;

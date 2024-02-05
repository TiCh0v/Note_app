import React, { useState } from 'react';
import './styles/BageStyles.scss';

function Bage({ colors, onColorChange }) {
  const [activeId, setActiveId] = useState(1);
  

  const buttonColorClick = (color)  => { onColorChange(color); }

  const buttonClick = (event) => {

    const currentId = event.currentTarget.getAttribute('id');
    
    if (activeId !== currentId) {
      if (activeId !== null) {
        const prevActiveElement = document.getElementById(activeId);
        prevActiveElement.classList.remove('active');
      }
      setActiveId(currentId);
    }
  };

  return (
    <>
      {colors.map((color) => (
        <li key={color.id} onClick={() => buttonColorClick(color.color)}>
          <svg
            id={color.id}
            onClick={buttonClick}
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill={color.color}
            className={`bi bi-circle-fill ${activeId === color.id ? 'active' : ''}`}
            viewBox="0 0 16 16"
          >
            <circle cx="8" cy="8" r="8"></circle>
          </svg>
        </li>
      ))}
    </>
  );
}

export default Bage;


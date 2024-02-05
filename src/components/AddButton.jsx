import React, { useState } from 'react';
import './styles/AddButton.scss';
import DB from '../assets/db.json';
import Bage from './Bage';
import axios from 'axios';

function AddButton({ addLists, updateLists}) {
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedColor, setSelectedColor] = useState('gray');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  }

  const addList = () => {
    
    if(!inputValue){
      return
    }
    setLoading(true);
    addLists({
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-list-check\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0\"></path></svg>",
      name: inputValue,
      status: "",
      color: selectedColor,
      removable: true
    })
    
    axios.post('http://localhost:2000/lists', {
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-list-check\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0\"></path></svg>",
      name: inputValue,
      status: "",
      color: selectedColor,
      removable: true, 
      content: "Start note..."
    }).then(() =>{
      updateLists()
      setInputValue('');
      setSelectedColor('gray');
      });
    setLoading(false);
    setVisible(false);
  }

  
  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div spellCheck={false} className='todo_list'>
        <ul className='add_button_call'>
          <li className='' onClick={handleClick}>
            <i className='custom-pos'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill='gray'
                className="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </i>
            <span style={{ color: 'gray' }} className=''>
              New note
            </span>
          </li>
        </ul>
      </div>

      {visible && (
        <div className='add-window'>
          <input value={inputValue} onChange={event => setInputValue(event.target.value)} className="field" type="text" placeholder='Note header' />
          <div className="colors">
            <ul>
              <Bage colors={DB.colors} onColorChange={handleColorChange}/>
            </ul>
          </div>

          <button onClick={addList} className='button'>
            {loading?<div class="square-10"></div>:<p>Add</p>}
          </button>
          
        </div>
      )}
    </div>
  );
}

export default AddButton;

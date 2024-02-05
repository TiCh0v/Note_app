import React, { useState, useEffect } from 'react';
import './styles/Tasks.scss';
import axios from 'axios';

function Tasks({ lists, selectedObj, updateLists, setSelectedObj, deleteEl, handleClick }) {

    const [content, setContent] = useState(' ');

    useEffect(() => {
        setContent(selectedObj.content);
    }, [selectedObj]);

    const editTitle = (ev) => {
      const updatedData = { ...selectedObj, name: ev.target.innerText };
      
      try {
          axios.put(`http://localhost:2000/lists/${selectedObj.id}`, updatedData)
          .then(() => {
              updateLists();
          });
      } catch (error) {
          console.log(error);
      }
      
    };

    const editContent = (ev) => {

        setContent(ev.target.innerText);
        const updatedData = { ...selectedObj, content: ev.target.innerText };
        try {
            axios.put(`http://localhost:2000/lists/${selectedObj.id}`, updatedData)
            .then(() => {
                updateLists();
            });
        } catch (error) {
            console.log(error);
        }
    
    
      
    };
    
    const startNote = () => {
      if (content === 'Start note...') {
        setContent('');
      }
    }
  
    return (
      <div>
        <div spellCheck={false} className='tasks'>
          <h2 className='tasks__title' suppressContentEditableWarning={true} contentEditable onBlur={editTitle}>
            {selectedObj.name}
          </h2>
          <div className='tasks__items'>
            <div
              className={`text ${content === 'Start note...' ? 'start-note-class' : ''}`}
              contentEditable
              suppressContentEditableWarning={true}
              onBlur={editContent}
              onClick={startNote}
            >
              {selectedObj.name === 'All notes'?(
                <ul>
                  {lists.slice(1).map((item, index) => (
                    <div className='allnotelist-wrapper' onClick={()=>{handleClick(item, lists)}} key={index}>
                      <div className='allnotelist' contentEditable={false} key={index}>
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill={item.color} className="bi bi-circle-fill" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8"></circle>
                          </svg>
                        </i>
                        <div>{item.name}</div>
                      </div>
                      <i className='' onClick={(ev) => { deleteEl(item.id);
                          ev.stopPropagation() }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-x" viewBox="0 0 16 16">
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                        </svg>
                      </i>
                    </div>
                  ))}
                </ul>
              ):content}
              
            </div>
          </div>
        </div>
      </div>
    );
}

export default Tasks;

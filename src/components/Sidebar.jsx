import { React } from 'react';
import axios from 'axios';

function Sidebar({ items, updateLists, setSelectedObj, setLists, deleteEl, handleClick }) {


  


  return (
    <div className=''>
      <div className='todo_list'>
        <ul>
          {items.map((item, index) => (
            <li onClick={() => handleClick(item, items)} key={index} className={`${item.status} ${index === 0 ? 'first-item' : ''}`}>
              <div className='note_del'>
                {index === 0 ? (
                  <i className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={item.color} className="bi bi-list-check" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"></path>
                    </svg>
                  </i>
                ) : (
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill={item.color} className="bi bi-circle-fill" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8"></circle>
                    </svg>
                  </i>
                )}
                <span>
                  {item.name} 
                </span>
            
                  {item.removable ?
                  <i className='' onClick={(ev) => { deleteEl(item.id);
                      ev.stopPropagation() }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="lightgray" className="bi bi-x" viewBox="0 0 16 16">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                    </svg>
                  </i> : ''}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

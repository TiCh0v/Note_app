import {React, useState} from 'react';
import axios from 'axios';

import './App.scss';
import Sidebar from './components/Sidebar';
import DB from './assets/db.json';
import AddButton from './components/AddButton';
import Tasks from './components/Tasks';



function App() {
  const [lists, setLists] = useState(DB.lists);
  const [selectedObj, setSelectedObj] = useState(' ');


  const addList = (obj) => {
    const newList = [...lists, obj];
    setLists(newList)
  }

  const updateLists = () => {
    axios.get('http://localhost:2000/lists')
      .then(response => {
        setLists(response.data);
      })
      .catch(error => {
        console.error('Error fetching lists:', error);
      });
  }
  const deleteElAllNotes = (id) => {
    axios.delete('http://localhost:2000/lists/' + id)
      .then(() => {
        updateLists();
      })
      .catch(error => {
        console.error('Error removing item:', error);
      });     
  };
  const deleteEl = (id) => {
    axios.delete('http://localhost:2000/lists/' + id)
      .then(() => {
        if(id === selectedObj.id){
          setSelectedObj('');
          updateLists();
        } else{
          updateLists();
        }

      })
      .catch(error => {
        console.error('Error removing item:', error);
      });     
  };

  const handleClick = (obj, items) => {
    let activeList = items.map((item) => {
      if (item.id === obj.id) {
        return { ...item, status: 'active' }; 
      } else {
        return {...item, status: ''};
      }
    });
    setLists(activeList);
    setSelectedObj(obj)      
  };


  return (
    <div className="App">
      <div className='sidebar1'>
        <Sidebar items={lists} setLists={setLists} updateLists={updateLists} setSelectedObj={setSelectedObj} deleteEl={deleteEl} handleClick={handleClick}/>
        <AddButton addLists={addList} updateLists={updateLists} />
      </div>
      <Tasks lists ={lists} selectedObj={selectedObj} updateLists={updateLists} setSelectedObj={setSelectedObj} deleteEl={deleteElAllNotes} handleClick={handleClick}/>
    </div>
  );
}

export default App;


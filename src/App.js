import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

function App() {

  const [entries, setEntries] = useState([{id: 1, name: 'JC', post: 'This is my initial post!', isLike: false, isDislike: false}])

  function addNewEntry(entry) {

    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }

  return (
    <div>
      <header className='header-style'>
        <NavBar />
      </header>
      <div className='body-style'>
        <div className='container-fluid'>
          <div className='border-box'>
            <AddEntryForm addNewEntry={addNewEntry} array={entries}/>
          </div>
          <div className='border-box'>
            <DisplayEntries parentEntries={entries}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

function App() {

  const [entries, setEntries] = useState([{name: 'JC', post: 'This is my initial post!'}])

  function addNewEntry(entry) {

    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }

  return (
    <div>
      <header className='header-style'>
        <NavBar />
      </header>
      <body className='body-style'>
        <div className='container-fluid'>
          <div className='border-box'>
            <AddEntryForm addNewEntry={addNewEntry}/>
          </div>
          <div className='border-box'>
            <DisplayEntries parentEntries={entries}/>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;

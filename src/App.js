import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {

  const [entries, setEntries] = useState([{name: 'JC', post: 'This is my initial post!', date: '06/14/2022'}])

  function addNewEntry(entry) {

    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayEntries parentEntries={entries}/>
      <AddEntryForm addNewEntry={addNewEntry}/>
    </div>
  );
}

export default App;

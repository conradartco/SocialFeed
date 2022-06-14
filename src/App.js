import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const [entries, setEntries] = useState([{name: 'JC', post: 'This is my initial post!', date: '06/14/2022'}])

  return (
    <div>
      <DisplayEntries parentEntries={entries}/>
    </div>
  );
}

export default App;

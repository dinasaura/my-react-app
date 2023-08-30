import './App.css';
import React from 'react';
import FilteredList from './FilteredList';

function App() {
  const itemList = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Luca', age: 17 },
    { id: 3, name: 'John', age: 30 },
  ];

  return (
    <div>
      <FilteredList list={itemList} />
    </div>
  );
}

export default App;


import './App.css';
import { useState } from 'react';

function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert('Enter an item!');
      return;
    };

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem('');
  };

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  };
  
  return (
    <div id="box">
      <h1>Todo list</h1>

      <input
        type="text"
        placeholder="Add an item"
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>Add</button>

      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>{item.value} 
            <button className="delBtn" onClick={() => deleteItem(item.id)}>X</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default App;

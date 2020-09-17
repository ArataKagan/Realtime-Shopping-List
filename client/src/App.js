import React, { useState } from 'react';
import ShoppingList from './components/ShoppingList';
import './App.css';

function App() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(0);

  const printValues = e => {
    e.preventDefault();
    console.log(item, quantity);
    setItem("");
    setQuantity(0);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Welcome to Shopping List App</p>

        <form onSubmit={printValues}>
          <label>
            Item:
            <input
              value={item}
              onChange={event => setItem(event.target.value)}
              name="item"
              type="text"
            />
          </label>
          <br />
          <label>
            Quantity:
            <input
              value={quantity}
              onChange={event => setQuantity(event.target.value)}
              name="quantity"
              type="text"
            />
          </label>
          <br />
          <button>Submit</button>
        </form>

        <ul>
          <ShoppingList />
          <ShoppingList />
        </ul>
      </header>
    </div>
  );
}

export default App;

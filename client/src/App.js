import React from 'react';
import ShoppingList from './components/ShoppingList';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Welcome to Shopping List App</p>
        <ul>
          <ShoppingList />
          <ShoppingList />
        </ul>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ShoppingList from './components/ShoppingList';
import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Welcome to Shopping List App</p>
        <SearchBar />
        <ShoppingList />
      </header>
    </div>
  );
}

export default App;

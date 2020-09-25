import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import ShoppingList from './components/ShoppingList';
import './App.css';

function App() {
  const { register, handleSubmit } = useForm();
  const [items, updateItem] = useState({});
  const onSubmit = async data => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post('/api/shopping-list', data, config);

    if (res) {
      // Update item
      updateItem(res);
      console.log("Data posted");
      console.log(items);
    } else {
      console.log("Failed");
    }
  }

  useEffect(() => {
    axios.get('/api/shopping-list').then(result => {
      result.data.forEach(ele => console.log(ele));
    }).catch(err => console.log(err));
  })

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Welcome to Shopping List App</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="item" ref={register} />
          <select name="quantity" ref={register}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import { useForm } from 'react-hook-form';
import ShoppingList from './components/ShoppingList';
import './App.css';

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

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

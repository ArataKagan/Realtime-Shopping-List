import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShoppingList() {
  const [items, setItems] = useState({});
  const [inputText, setInputText] = useState(false);

  useEffect(() => {
    loadItems()
  }, []);

  async function loadItems() {
    let response = await fetch("/api/shopping-list");
    response = await response.json();
    setItems(response);
  }

  function deleteItem(e) {
    console.log("Inside of deleteItem");
    console.log(e.id);
    console.log(items);
    setItems(Array.from(items).filter(item => item.id != e.id));
    axios.post('/api/shopping-list/' + e.id + '/delete');
  }

  function onClickInput(e) {
    console.log(e);
    if (inputText) {
      setInputText(false);
    } else {
      setInputText(true);
    }
  }

  return (
    <div className='ShoppingList'>
      <p>Shopping List</p>
      {Array.from(items).map((item, index) =>
        <div key={index}>
          {inputText ?
            (<input key={index + 1} />) :
            (<p
              key={index + 1}
              onClick={() => onClickInput(item)}>{item.item}{item.quantity}</p>)}
          <p onClick={() => deleteItem(item)}>Delete</p>
        </div>
      )}
    </div>
  );
}

export default ShoppingList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShoppingList() {
  const [items, setItems] = useState({});

  useEffect(() => {
    loadItems()
  }, []);

  async function loadItems() {
    let response = await fetch("/api/shopping-list");
    response = await response.json();
    setItems(response);
  }

  return (
    <div className='ShoppingList'>
      <p>Shopping List</p>
      {Array.from(items).map(item =>
        <>
          <p>{item.item}{item.quantity}</p>
        </>
      )}
    </div>
  );
}

export default ShoppingList;

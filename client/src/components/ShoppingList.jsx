import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShoppingList() {
  // const [items, updateItems] = useState({});

  useEffect(() => {
    axios.get('/api/shopping-list').then(result => {
      result.data.forEach(ele => console.log(ele));
    }).catch(err => console.log(err));
  })

  return (
    <div className='ShoppingList'>
      <p>Shopping List</p>
    </div>
  );
}

export default ShoppingList;

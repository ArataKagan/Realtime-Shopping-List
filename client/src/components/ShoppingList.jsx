import React from 'react';

function ShoppingList({ item, quantity }) {
  return (<li>{item} : {quantity}</li>)
}

export default ShoppingList;

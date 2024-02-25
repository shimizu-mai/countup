import React from 'react';
import Counter from './Counter';

function ItemCounter({ itemName }) {
  return (
    <div className="counterContainer">
      <div className="itemLabel">{itemName}</div>
      <Counter />
    </div>
  );
}

export default ItemCounter;
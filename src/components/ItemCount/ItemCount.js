import React, { useState } from 'react';
import './ItemCount.css';

//para seleccionar cantidad del producto segun stock y agregarlo al carrito
export default function ItemCount(props) {

  const { stock, initial, onAdd } = props;
  const [count, setCount] = useState(initial);

  const addCount = () => {
    (count < stock) && (setCount(count + 1));
  };

  const removeCount = () => {
    (count > initial) && (setCount(count - 1));

  };

  const checkStock = () => {
    onAdd(count);
  }

  return (
    <div>
      <button className='btn-style' onClick={removeCount}> - </button>
      {count}
      <button className='btn-style' onClick={addCount}> + </button>
      <div >
        <button className='button-style' onClick={checkStock}>Agregar al carrito</button>
      </div>
    </div>
  );
}
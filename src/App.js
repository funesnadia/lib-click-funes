import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import React, { useState } from 'react';

function App() {
  const [totCart, setTotCart] = useState(0);
  const total = (count) => {
      //console.log(`en App antes de sumar ${totCart} ${count}`);
      setTotCart(totCart + count);
      //console.log(`en app despues de sumar ${totCart}` );
  }
  return (
    <div className='App'>
      <NavBar totCart = {totCart}/>
      <ItemListContainer titulo='Productos' total={total}/>
    </div>
  );
}

export default App;

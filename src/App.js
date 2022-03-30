import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React, { useState } from 'react';

function App() {
  const [totCart, setTotCart] = useState(0);
  const total = (count) => {
    setTotCart(totCart + count)
  }
  return (
    <div className='App'>
      <NavBar totCart={totCart} />
      <ItemListContainer titulo='Productos' total={total} />
      <ItemDetailContainer />
    </div>
  );
}

export default App;

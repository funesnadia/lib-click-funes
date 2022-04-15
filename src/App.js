import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

// estilos
import './App.css';

//componentes
import NavBar from './components/NavBar/NavBar';
import { Container } from '@mui/material';

//pages
import HomePage from './pages/Home';
import DetailPage from './pages/Detail';
import ContactPage from './pages/Contact';
import NotFoundPage from './pages/NotFound';
import NewsPage from './pages/News';
import UsPage from './pages/Us';
import CartPage from './pages/Cart';


function App() {
  return (
    <Container className='App'>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/categoria/:category' element={<HomePage />} />
            <Route path='/productos/:id' element={<DetailPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/us' element={<UsPage />} />
            <Route path='/news' element={<NewsPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </Container>
  );
}
export default App;

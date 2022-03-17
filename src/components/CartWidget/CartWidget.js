import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CartWidget.css';

export default function CartWidget() {
        return (
            <IconButton color="primary" aria-label="Agregar al carrito" className='cart'>
            <AddShoppingCartIcon/>
            <p>2</p>
            </IconButton>
        );

}
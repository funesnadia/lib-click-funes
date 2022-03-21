import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CartWidget.css';

export default function CartWidget(props) {
    const {totCart} = props
    //console.log(`en CartWidget ${totCart}`)
    return (
        <IconButton color="primary" aria-label="Agregar al carrito" className='cart'>
            <AddShoppingCartIcon />
            <p>{totCart}</p> 
        </IconButton>
    );

}
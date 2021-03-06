import { Container } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";

import React, { useState, useContext}  from "react";
import { useNavigate } from 'react-router-dom';

import CartContext from "../../context/CartContext";

import './ItemDetail.css';

//detalle del producto y terminacion de compra para ir al carrito
export default function ItemDetail({ data }) {
    const { titulo, precio, img, stock, initial = 1} = data
    const [cantCompra, setCantCompra] = useState(0);
    const {addProductToCart} = useContext(CartContext);

    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate(`/cart`)
    }
    const onAdd = (qty) => {
        setCantCompra(qty)
        addProductToCart(data, qty)
    }
    return (
        <Container>
            <div className="product-container">
                <div className="product-content">
                    <div className="columna1">
                        <img src={img} alt='detail'/>
                    </div>
                    <div className="columna2">
                        <h3>{titulo}</h3>
                        <h4>Precio: $ {precio}</h4>
                        {(cantCompra === 0) && <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>}
                        <div>
                            <button className='button-style' onClick={handleLogoClick}>Terminar Compra</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

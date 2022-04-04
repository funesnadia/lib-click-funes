import { Container } from "@mui/material";
import React from "react";
import './ItemDetail.css';

export default function ItemDetail({ data }) {
    const { titulo, precio, img } = data
    return (
        <Container>
        <div className="product-container">  
            <div className="product-content">
                <div className="columna1">
                    <img src={img} />
                </div>
                <div className="columna2">
                    <h3>{titulo}</h3>
                    <h4>Precio: $ {precio}</h4>
                    <button >Comprar</button>
                </div>
            </div>
        </div>
        </Container>
    );
}

import React from "react";
import './ItemDetail.css';


export default function ItemDetail ({data}) {
    const {titulo, precio, img} = data
    return (
        <div className="card-estyle">
            <h2>{titulo}</h2>
            <img src={img}/> 
            <h3>Precio: $ {precio}</h3>          
        </div>
    
    );
}
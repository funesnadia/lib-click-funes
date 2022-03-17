import React from "react";
import './Cards.css'
export default function Cards(props) {
    return (
        <div className="card-estyle">
            <h2>{props.titulo}</h2>
            <p>Precio: $ {props.precio}</p>
            <p>Marca: {props.marca}</p>  
            <button className="button-style">Comprar</button>
              
        </div>
    
    );

}
import React from "react";
import './Cards.css';
import ItemCount from "../ItemCount/ItemCount";

export default function Cards(props) {
    const {titulo, marca, precio, stock, initial, total} = props;
    const onAdd = (qty) => {
        alert(`Agregaste ${qty} productos`);
        total(qty)
    }
    return (
        <div className="card-estyle">
            <h2>{titulo}</h2>
            <p>Precio: $ {precio}</p>
            <p>Marca: {marca}</p>
            <ItemCount stock = {stock} initial = {initial} onAdd = {onAdd}/>              
        </div>
    
    );

}
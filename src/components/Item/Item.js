import React from "react";
import './Item.css';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

export default function Item({ data }) {

    const { titulo, marca, precio, stock, initial, img, id } = data;
    const onAdd = (qty) => {
        alert(`Agregaste ${qty} productos`)
    }
    return (
        <div className="card-estyle">
            <div className='img-style'>
                <img src={img} />
            </div>
            <h3>{titulo}</h3>
            {/* <p>Precio: $ {precio}</p> */}
            <p>Marca: {marca}</p>
            <button className='button-style'>
                <Link to={'/productos/' + id}>Ver Detalle</Link>
            </button>
            <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
        </div>

    );

}
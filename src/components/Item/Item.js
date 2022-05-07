import React, {useContext} from "react";
import ItemCount from "../ItemCount/ItemCount";

import { Link } from "react-router-dom";

import CartContext from "../../context/CartContext";

import './Item.css';

//detalle del producto
export default function Item({ data }) {

    const { titulo, marca, stock, initial, img, id } = data;
    const {addProductToCart} = useContext(CartContext);

    const onAdd = (qty) => {
        addProductToCart(data, qty)
    }
    return (
        <div className="card-estyle">
            <div className='img-style'>
                <img src={img} alt='item'/>
            </div>
            <h3>{titulo}</h3>
            <p>Marca: {marca}</p>
            <button className='button-style'>
                <Link to={'/productos/' + id}>Ver Detalle</Link>
            </button>
            <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
        </div>

    );

}
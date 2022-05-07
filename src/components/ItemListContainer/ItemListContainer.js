import React from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

import './ItemListContainer.css';

//contenedor de la lista de productos
export default function ItemListContainer(props) {
    const { titulo} = props
    const {category} = useParams();
    
    return (
        <div className="list-style">
            <ItemList titulo = {titulo} category={category}/>
        </div>
    );
}
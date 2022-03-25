import React from "react";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
export default function ItemListContainer(props) {
    const { titulo, total } = props
    
    return (
        <div className="list-styte">
            <ItemList titulo = {titulo} total={total} />
        </div>

    );

}
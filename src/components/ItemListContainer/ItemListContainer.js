import React from "react";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';
import { useParams } from "react-router-dom";

export default function ItemListContainer(props) {
    const { titulo} = props
    const {category} = useParams();
    
    return (
        <div className="list-style">
            <ItemList titulo = {titulo} category={category}/>
        </div>

    );

}
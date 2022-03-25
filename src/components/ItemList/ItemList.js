import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import './ItemList.css'
export default function ItemList(props) {
    const { titulo, total } = props
    const [products, setProducts] = useState([])

    const mockProduct = [
        { titulo: "Lapiz negro", id: 1, marca: "faber", precio: 50, stock: 20, initial: 1, total: total },
        { titulo: "Goma de borrar", id: 2, marca: "faber", precio: 20, stock: 5, initial: 1, total: total },
        { titulo: "Regla", id: 3, marca: "mapped", precio: 25, stock: 12, initial: 1, total: total },
        { titulo: "Caja Lapices", id: 4, marca: "faber castell", precio: 300, stock: 8, initial: 1, total: total },
        { titulo: "Portautil", id: 5, marca: "como quieres", precio: 1500, stock: 3, initial: 1, total: total },
        { titulo: "Carpeta A4", id: 6, marca: "rivadavia", precio: 700, stock: 10, initial: 1, total: total },
        { titulo: "Carpeta A5", id: 7, marca: "rivadavia", precio: 800, stock: 25, initial: 1, total: total }
    ]
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(mockProduct)
            }, 2000);    
        });
    }

    useEffect ( () => {
        getProducts().then( (items) => {
            setProducts(items)
        })
    }, [])
  
    return (
        <div className="list-styte">
            <h2> {titulo}</h2>
            {products.map( (item) =>{
                const {id} = item
                return(
                    <Item data={item} key={id}/>
                ) 
            })}
        </div>

    )

}
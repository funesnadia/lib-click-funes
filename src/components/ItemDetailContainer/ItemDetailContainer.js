import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'

export default function ItemDetailContainer() {
    const [product, setProduct] = useState(0)

    const mockProduct = { id: 1, titulo: "Lapiz negro", marca: "Faber Castell", precio: 50, img: "imgLapiz.jpg" }

    const getProduct = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockProduct)
            }, 2000);
        });
    }

    useEffect(() => {
        getProduct().then((prod) => {
            setProduct(prod)
        }).finally( () => {
            console.log ("termino la llamada")
        }).catch('error en UseEffect')
    }, [])

    return (
        product != 0 && <ItemDetail data={product} />
    );

}
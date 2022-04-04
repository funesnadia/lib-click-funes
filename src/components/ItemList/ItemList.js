import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

//estilos
import './ItemList.css';

//utils
import mockProducts from "../../Utils/mockProducts";
import { Container } from "@mui/material";

export default function ItemList({ titulo, category = 'all' }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts([]);
        getProducts().then((items) => {
            findProductByCategory(items, category)
        })
    }, [category])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(mockProducts)
            }, 2000);
        });
    }

    const findProductByCategory = (products, category) => {
        if (category == 'all') {
            setProducts([])
            return setProducts(products)
        }
        else {
            products.map((product) => {
                if (product.categoria === category) {
                    return setProducts(products => [...products, product]);
                }
            }
            )
        }
    }



    return (
        <Container>
            <h2> {titulo}</h2>
            {
                (products.length > 0) ? products.map((product) => {
                    return (<Item data={product} key={product.id}></Item>)
                })
                    : <p>Cargando productos...</p>}
        </Container>)
}
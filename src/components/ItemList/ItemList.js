import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import CircularProgress from '@mui/material/CircularProgress';

//estilos
import './ItemList.css';

//utils
import { Container } from "@mui/material";

//db
import db from "../../firebase";
import { collection, getDocs} from 'firebase/firestore'


export default function ItemList({ titulo, category = 'all' }) {
    const [products, setProducts] = useState([])
    const [loading , setLoading] = useState(true)

    useEffect( () => {
        setProducts([])
        setLoading(true)
        getProducts().then( (productos) => {
            setLoading(false)
            category ? findProductByCategory(productos, category) : setProducts(productos)
        })
    }, [category])

    const getProducts = async () => {
        const itemsCollection = collection(db, 'products')
        const productosSnapshot = await getDocs(itemsCollection)
        const productList = productosSnapshot.docs.map(
            (doc) => {
                let product = doc.data()
                product.id = doc.id
                return product
            }
        )
        return productList

    }

    const findProductByCategory = (products, category) => {  
        if (category === 'all') {
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
                    : <CircularProgress />}
        </Container>)
}
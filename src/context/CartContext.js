import {createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);

    const addProductToCart = (product, qty) => {
        let value = {count: qty, product: product}
        let exist = cartProducts.find(cartProduct => cartProduct.product.id == product.id)
        !exist && setCartProducts(cartProducts => [...cartProducts, value])
    } 
    
    const deleteProduct = (id) => {
        setCartProducts(cartProducts.filter( cartProduct => cartProduct.product.id !== id))
    }

    const resetProducts = () => {
        setCartProducts([])
    }
    const data = {
        cartProducts,
        addProductToCart,
        deleteProduct,
        resetProducts

    }

    return (
        <CartContext.Provider value = {data}>
            {children}
        </CartContext.Provider>
    )

}

export {CartProvider}
export default CartContext
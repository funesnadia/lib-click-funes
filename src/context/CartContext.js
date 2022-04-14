import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const addProductToCart = (product, qty) => {
        let value = { count: qty, product: product }
        // let exist = cartProducts.find(cartProduct => cartProduct.product.id == product.id)
        // !exist && setCartProducts(cartProducts => [...cartProducts, value])
        if (isInCart(product.id)) {

            const prod = cartProducts.find(cartProduct => cartProduct.product.id == product.id);
            const { cantidad } = prod.count;

            prod.count = prod.count + qty;
            const newCart = [...cartProducts];
            setCartProducts(newCart);

        } else {

            setCartProducts([...cartProducts, value])
        }

    }

    const deleteProduct = (id) => {
        setCartProducts(cartProducts.filter(cartProduct => cartProduct.product.id !== id))
    }

    const resetProducts = () => {
        setCartProducts([])
    }

    const isInCart = (id) => {
        return cartProducts.some(prod => prod.product.id === id)

    }

    const totAmount = () => {
        return cartProducts.reduce((acum, prod) => acum = acum + (prod.product.precio * prod.count), 0)
    }

    const amount = () => {
        return cartProducts.reduce((acum, prod) => acum += prod.count, 0)
    }

    const data = {
        cartProducts,
        addProductToCart,
        deleteProduct,
        resetProducts,
        totAmount,
        amount
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

}

export { CartProvider }
export default CartContext
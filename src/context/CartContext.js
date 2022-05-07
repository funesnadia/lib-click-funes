import { createContext, useState } from "react";

//conexto para el carrito de compras
//usa localstorage para no perder los productos al actualizar la pagina
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);
    
    const addProductToCart = (product, qty) => {
        let value = { count: qty, product: product }
        if (isInCart(product.id)) {
            const prod = cartProducts.find(cartProduct => cartProduct.product.id === product.id);
            prod.count = prod.count + qty;
            const newCart = [...cartProducts];
            setCartProducts(newCart);
            localStorage.setItem("products", JSON.stringify(newCart))

        } else {
            setCartProducts([...cartProducts, value])
            localStorage.setItem("products", JSON.stringify([...cartProducts, value]))
        }
    }

    const deleteProduct = (id) => {
        const cartProductUpdate = cartProducts.filter(cartProduct => cartProduct.product.id !== id)
        setCartProducts(cartProductUpdate)
        localStorage.setItem("products", JSON.stringify(cartProductUpdate))
    }

    const resetProducts = () => {
        setCartProducts([])
        localStorage.removeItem("products")
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
import React, {useState, createContext} from "react"

export const CartContext = createContext();

export const CartProvider = (props) =>{
    const [cart, Setcart] = useState([])
    return (
        <CartContext.Provider value={[cart, Setcart]}>
            {props.children}
        </CartContext.Provider>
    )
}
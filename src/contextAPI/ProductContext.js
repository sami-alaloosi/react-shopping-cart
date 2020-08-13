import React, {createContext, useState} from "react"
import data from "../data"


export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [product, setProduct] = useState(data)
return(
    <ProductContext.Provider value={[product, setProduct]}>
        {props.children}
    </ProductContext.Provider>
)
}
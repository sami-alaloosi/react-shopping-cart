import React, {useContext} from 'react';

// Components
import Product from './Product';

//context API 
import {ProductContext} from "../contextAPI/ProductContext"
import {CartContext} from "../contextAPI/CarContext"



const Products = () => {
	const [products] = useContext(ProductContext)
	const[cart, setCart] = useContext(CartContext)

	const addItem = item => {
	
		setCart([...cart, item])
	};

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;

import React, {useContext} from 'react';

// Components
import Product from './Product';

//context API 
import {ProductContext} from "../contextAPI/ProductContext"

const Products = props => {
	const [products] = useContext(ProductContext)
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;

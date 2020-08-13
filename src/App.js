import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//context API
import {ProductProvider} from "./contextAPI/ProductContext"

function App() {
	
	const [cart, setCart] = useState([]);

	const addItem = item => {
	
		setCart([...cart, item])
	};

	return (
		<div className="App"> 
		<ProductProvider>
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products
				 addItem={addItem} />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
			</ProductProvider>
		</div>
	);
}

export default App;

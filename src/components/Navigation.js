import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';

//context API 
import {CartContext} from "../contextAPI/CarContext"

const Navigation = () => {
	const [cart] = useContext(CartContext)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;

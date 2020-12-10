import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

const LOCAL_STORAGE = 'shopingCart';


const initCart = () => {
	const storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
	if (storage === null) {
		return [];
	} else {
		return storage;
	}
} 

function App() {


	const [products] = useState(data);
	const [cart, setCart] = useState(initCart());

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE, JSON.stringify(cart));
	},[cart])

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	const removeItem = itemID => {
		const newCart = cart.filter(item => item.id !== itemID);
		setCart(newCart);
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{cart, removeItem}}>
					<Navigation />

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
			
		</div>
	);
}

export default App;

// Shop.js

// import React, { useEffect, useState } from 'react'
// import Preloader from './Preloader'
// import ProductList from './ProductList'

// function Shop() {

// 	const [products, setProducts] = useState([])
// 	const [loading, setLoading] = useState(true)

// 	const url = 'https://fortniteapi.io/v2/shop?lang=en'
// 	const api= '7fc64936-8e4b6835-6b4352c1-09902786'

// 	useEffect(() => {
// 	fetch(url,{
// 		headers: {
// 			Authorization: api
// 		}
// 	})
// 		.then(response => response.json())
// 		.then(data => {
// 			setProducts(data.shop)
// 			setLoading(false)
// 		})
// }, [])

// 	return (
// 		<main>
// 			<div className="container">
// 				{loading ? <Preloader /> : <ProductList products={products} />}
// 			</div>
// 		</main>
// 	)
// }

// export default Shop



// Shop2.js

// import React, { useEffect, useState } from 'react';
// import Preloader from './Preloader';
// import ProductList from './ProductList';

// function Shop() {
// 	const [products, setProducts] = useState([]);
// 	const [loading, setLoading] = useState(true);
// 	const [cart, setCart] = useState([]);

// 	const handleAddToCart = (product) => {
// 		const existingProduct = cart.find((item) => item.mainId === product.mainId);

// 		if (existingProduct) {
// 			setCart((prevCart) =>
// 				prevCart.map((item) =>
// 					item.mainId === product.mainId
// 						? {
// 							...item,
// 							quantity: item.quantity + 1,
// 							total: item.total + item.price.finalPrice,
// 						}
// 						: item
// 				)
// 			);
// 		} else {
// 			setCart((prevCart) => [
// 				...prevCart,
// 				{ ...product, quantity: 1, total: product.price.finalPrice },
// 			]);
// 		}
// 	};

// 	const handleRemoveFromCart = (productId) => {
// 		setCart((prevCart) => prevCart.filter((item) => item.mainId !== productId));
// 	};

// 	const totalCost = cart.reduce((total, item) => total + item.total, 0);

// 	useEffect(() => {
// 		const url = 'https://fortniteapi.io/v2/shop?lang=en';
// 		const api = '7fc64936-8e4b6835-6b4352c1-09902786';

// 		fetch(url, {
// 			headers: {
// 				Authorization: api,
// 			},
// 		})
// 			.then((response) => response.json())
// 			.then((data) => {
// 				setProducts(data.shop);
// 				setLoading(false);
// 			});
// 	}, []);

// 	return (
// 		<main>
// 			<div className="container">
// 				{loading ? (
// 					<Preloader />
// 				) : (
// 					<ProductList
// 						products={products}
// 						onAddToCart={handleAddToCart}
// 						onRemoveFromCart={handleRemoveFromCart}
// 						cart={cart}
// 						totalCost={totalCost}
// 					/>
// 				)}
// 			</div>
// 		</main>
// 	);
// }

// export default Shop;



// Shop3.js


import React, { useEffect, useState } from "react";
import Preloader from "./Preloader";
import ProductList from "./ProductList";
import Cart from "./Cart";


function Shop() {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);
	const [order, setOrder] = useState	([]);
	const [isCartShow, setCartShow] =useState(false);

	const api = "013c4489-13efd6bc-670bafc0-5d03011d";
	const url = "https://fortniteapi.io/v2/shop?lang=en";

	useEffect(() => {
		fetch(url, {
			headers: {
				Authorization: api,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setProducts(data.shop);
				setLoading(false);
			});
	}, []);

	const addToCart = (item) => {
		const newItem = {
			...item,
			quantity: 1
		}
		setOrder([...order, newItem])
	}

	const cartShow = () => {
		setCartShow(!isCartShow)
	}

	return (
		<main>
			<div className="container">
				<Cart 
					quantity={order.length}
					cartShow={cartShow}/>
				{loading ? <Preloader /> : <ProductList
				products={products}
				addToCart={addToCart}
				/>}
			</div>
		</main>
	);
}

export default Shop;

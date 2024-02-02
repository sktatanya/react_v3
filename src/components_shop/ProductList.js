// ProductList.js

// import React, { useState } from "react";
// import ProductItem from "./ProductItem";
// import classes from "./Shop.module.css";

// function ProductList(props) {
// 	const { products = [] } = props;
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

// 	return (
// 		<div className={classes.productсontainer}>
// 			<div className={classes.products}>
// 				{products.length ? (
// 					products.map((item) => (
// 						<ProductItem key={item.mainId} {...item} onAddToCart={handleAddToCart} />
// 					))
// 				) : (
// 					<h2>No Products</h2>
// 				)}
// 			</div>

// 			<div className={classes.cart}>
// 				<h2>Shopping Cart</h2>
// 				<h4 className={classes.totalCost}>Total Cost: {totalCost}</h4>
// 				{cart.length > 0 ? (
// 					<ul className={classes.cartlist}>
// 						{cart.map((item) => (
// 							<li key={item.mainId} className={classes.cartListItem}>
// 								<div>
// 									{item.displayName} - {item.price.finalPrice} x{item.quantity} = {item.total}
// 								</div>
// 								<button onClick={() => handleRemoveFromCart(item.mainId)}>Remove</button>
// 							</li>
// 						))}
// 					</ul>
// 				) : (
// 					<h4>Your cart is empty</h4>
// 				)}
// 			</div>
// 		</div>
// 	);
// }

// export default ProductList;



// ProductList2.js

// import React from "react";
// import ProductItem from "./ProductItem";
// import classes from "./Shop.module.css";

// function ProductList(props) {
// 	const { products = [], onAddToCart, onRemoveFromCart, cart, totalCost } = props;

// 	return (
// 		<div className={classes.productсontainer}>
// 			<div className={classes.products}>
// 				{products.length ? (
// 					products.map((item) => (
// 						<ProductItem key={item.mainId} {...item} onAddToCart={onAddToCart} />
// 					))
// 				) : (
// 					<h2>No Products</h2>
// 				)}
// 			</div>

// 			<div className={classes.cart}>
// 				<h2>Shopping Cart</h2>
// 				<h4 className={classes.totalCost}>Total Cost: {totalCost} $</h4>
// 				{cart.length > 0 ? (
// 					<ul className={classes.cartlist}>
// 						{cart.map((item) => (
// 							<li key={item.mainId} className={classes.cartListItem}>
// 								<div>
// 									{item.displayName} - {item.price.finalPrice} $ x {item.quantity} = {item.total} $
// 								</div>
// 								<button onClick={() => onRemoveFromCart(item.mainId)}>Remove</button>
// 							</li>
// 						))}
// 					</ul>
// 				) : (

// 					<h4>Your cart is empty</h4>

// 				)}
// 			</div>
// 		</div>
// 	);
// }

// export default ProductList;



// ProductList3.js


import React from "react";
import ProductItem from "./ProductItem";

function ProductList(props) {
	const { products = [] } = props;
	return (
		<>
			{products.length ? (
				<div className="products">
					{products.map((item) => (
						<ProductItem 
						key={item.mainId} {...item}
						addToCart={props.addToCart} />
					))}
				</div>
			) : (
				<h2>No products</h2>
			)}
		</>
	);
}

export default ProductList;

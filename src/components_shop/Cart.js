import React from 'react'

function Cart(props) {
	const { quantity = 0 } = props

	return (
		<div onClick={props.cartShow}>
			<span class="material-symbols-outlined">
				shopping_cart
			</span> {quantity}
		</div>
	)
}

export default Cart

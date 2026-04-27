import React from 'react';
import { useContext } from 'react';
import OrderItem from '../../components/OrderItem/OrderItem';
import AppContext from '../../contexts/AppContext';
import './Checkout.css';

const Checkout = () => {
	const { state } = useContext(AppContext);
	const total = state.cart.reduce((acc, item) => {
		const quantity = item.quantity || 1;
		return acc + (item.price * quantity);
	}, 0);
	const articleCount = state.cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My Order</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>Current Order</span>
							<span>{articleCount} items</span>
						</p>
						<p>${total}</p>
					</div>
				</div>
				{state.cart.length > 0 ? (
					state.cart.map((product, index) => (
						<OrderItem key={`checkout-item-${product.id}-${index}`} product={product} />
					))
				) : (
					<p>Your cart is empty.</p>
				)}
			</div>
		</div>
	);
}

export default Checkout;

import React from 'react';
import { useContext } from 'react';
import OrderItem from '../../components/OrderItem/OrderItem';
import AppContext from '../../contexts/AppContext';
import { UI_TEXT } from '../../constants/uiText';
import './Checkout.css';

const Checkout = () => {
	const { state } = useContext(AppContext);
	// Recalculate totals from normalized cart lines on every render.
	const total = state.cart.reduce((acc, item) => {
		const quantity = item.quantity || 1;
		const unitPrice = Number.isFinite(Number(item.price)) ? Number(item.price) : 0;
		return acc + (unitPrice * quantity);
	}, 0);
	const articleCount = state.cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">{UI_TEXT.checkout.title}</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>{UI_TEXT.checkout.currentOrder}</span>
							<span>{articleCount} {UI_TEXT.checkout.itemsSuffix}</span>
						</p>
						<p>${total}</p>
					</div>
				</div>
				{state.cart.length > 0 ? (
					state.cart.map((product, index) => (
						<OrderItem key={`checkout-item-${product.id}-${index}`} product={product} />
					))
				) : (
					<p>{UI_TEXT.checkout.empty}</p>
				)}
			</div>
		</div>
	);
}

export default Checkout;

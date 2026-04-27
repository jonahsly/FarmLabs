import React, { useContext } from 'react';
import OrderItem from '../../components/OrderItem/OrderItem';
import AppContext from "../../contexts/AppContext";
import './MyOrder.css';
import iarrow from '../../assets/icons/arrow.svg';

const MyOrder = () => {
	const { state } = useContext(AppContext);
	const hasItems = state.cart.length > 0;

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => {
			const quantity = currentValue.quantity || 1;
			// Guard totals against malformed or missing price values.
			const unitPrice = Number.isFinite(Number(currentValue.price)) ? Number(currentValue.price) : 0;
			return accumulator + (unitPrice * quantity);
		};
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={iarrow} alt="arrow" />
				<p className="title">My Order</p>
			</div>
			<div className="my-order-content">
				{hasItems ? (
					<>
						{state.cart.map((product,index) => (
							<OrderItem indexValue={index} product={product} key={`orderItem-${product.id}`} />
						))}
						<div className="order">
							<p>
								<span>Total</span>
							</p>
							<p>${sumTotal()}</p>
						</div>
						<button className="primary-button">
							Checkout
						</button>
					</>
				) : (
					<p className="empty-state">Your cart is empty. Add products to continue.</p>
				)}
			</div>
		</aside>
	);
}

export default MyOrder;

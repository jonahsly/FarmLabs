import React from 'react';
import { useContext } from 'react';
import OrderItem from '../../components/OrderItem/OrderItem';
import AppContext from '../../contexts/AppContext';
import { UI_TEXT } from '../../constants/uiText';
import './Orders.css';

const Orders = () => {
	const { state } = useContext(AppContext);
	return (
		<div className="Orders">
			<div className="Orders-container">
				<h1 className="title">{UI_TEXT.orders.title}</h1>
				<div className="Orders-content">
					{state.cart.length > 0 ? (
						state.cart.map((product, index) => (
							<OrderItem
								key={`orders-item-${product.id}-${index}`}
								product={product}
							/>
						))
					) : (
						<p>{UI_TEXT.orders.empty}</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default Orders;

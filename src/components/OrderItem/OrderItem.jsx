import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import './OrderItem.css';
import iclose from '../../assets/icons/icon_close.png';

const OrderItem = ({product}) => {
	const { removeFromCart } = useContext(AppContext);
	if (!product) return null;
	const image = product.images && product.images.length > 0 ? product.images[0] : '';
	const quantity = product.quantity || 1;
	const lineTotal = product.price * quantity;
	const handleRemove = product => {
		removeFromCart(product);
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={image} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p className="order-item-meta">x{quantity}</p>
			<p>${lineTotal}</p>
			<img src={iclose} alt="close"onClick={() => handleRemove(product)}/>
		</div>
	);
}

export default OrderItem;

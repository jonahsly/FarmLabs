import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import './OrderItem.css';
import iclose from '../../assets/icons/icon_close.png';
import fallbackProductImage from '../../assets/pexels-photo-260024.webp';

const OrderItem = ({product}) => {
	const { removeFromCart } = useContext(AppContext);
	if (!product) return null;
	// Use a stable fallback image/title to avoid broken order rows.
	const image = product.images && product.images.length > 0 ? product.images[0] : fallbackProductImage;
	const title = product.title || 'Untitled product';
	const quantity = product.quantity || 1;
	const unitPrice = Number.isFinite(Number(product.price)) ? Number(product.price) : 0;
	const lineTotal = unitPrice * quantity;
	const handleRemove = product => {
		removeFromCart(product);
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={image} alt={title} />
			</figure>
			<p>{title}</p>
			<p className="order-item-meta">x{quantity}</p>
			<p>${lineTotal}</p>
			<img src={iclose} alt="close"onClick={() => handleRemove(product)}/>
		</div>
	);
}

export default OrderItem;

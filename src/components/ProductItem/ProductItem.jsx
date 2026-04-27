import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../contexts/AppContext';
import './ProductItem.css';
import iadd from '../../assets/icons/bt_add_to_cart.svg';
import iadded from '../../assets/icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);
	const [addedFeedback, setAddedFeedback] = useState(false);

	useEffect(() => {
		if (!addedFeedback) return undefined;
		// Keep confirmation short to avoid noisy persistent states in the grid.
		const timeoutId = window.setTimeout(() => setAddedFeedback(false), 900);
		return () => window.clearTimeout(timeoutId);
	}, [addedFeedback]);

	const handleClick = item => {
		addToCart(item);
		setAddedFeedback(true);
	}
	const productImage = product.images && product.images.length > 0 ? product.images[0] : '';

	return (
		<div className="ProductItem">
			<img src={productImage} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
					{addedFeedback ? <p className="added-feedback">Added to cart</p> : null}
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={addedFeedback ? iadded : iadd} alt="add to cart" className='addToCart' />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;

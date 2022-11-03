import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import './ProductItem.css';
import iadd from '../../assets/icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);
	const handleClick = item => {
		addToCart(item);
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={iadd} alt="addToCart" className='addToCart' />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
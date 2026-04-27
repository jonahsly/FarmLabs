import React from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import "./ProductList.css";
import useGetProducts from '../../hooks/useGetProducts';
import API from './API';
 /*
const API = "https://api.escuelajs.co/api/v1/products";
*/
const ProductList = () => {
	const products = useGetProducts(API);
	const hasProducts = products && products.length > 0;

	return (
		<section className="main-container">
			<div className="ProductList">
				{hasProducts ? (
					products.map((product) => (
						<ProductItem product={product} key={product.id} />
					))
				) : (
					<p className="empty-state">No products available right now.</p>
				)}
			</div>
		</section>
	);
}

export default ProductList;

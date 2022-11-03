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
	return (
		<section className="main-container">
			<div className="ProductList">
				{products && products.map((product) => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	);
}

export default ProductList;
import React from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import "./ProductList.css";
import useGetProducts from '../../hooks/useGetProducts';
import productsSource from '../../config/productsSource';

const ProductList = () => {
	const { products, loading, error, reload } = useGetProducts(productsSource);
	const hasProducts = products && products.length > 0;

	if (loading) {
		// Keep users informed while the catalog is being retrieved.
		return (
			<section className="main-container">
				<div className="ProductList">
					<p className="empty-state">Loading products...</p>
				</div>
			</section>
		);
	}

	if (error) {
		// Provide a clear recovery action for temporary request failures.
		return (
			<section className="main-container">
				<div className="ProductList">
					<p className="empty-state">{error}</p>
					<button type="button" className="retry-button" onClick={reload}>
						Retry
					</button>
				</div>
			</section>
		);
	}

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

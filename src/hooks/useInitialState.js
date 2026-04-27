import { useState } from "react";
import { normalizeProduct } from "../utils/normalizeProducts";

const initialState = {
	cart: [],
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = (payload) => {
		setState((prevState) => {
			const safePayload = normalizeProduct(payload);
			// Store a single cart line per product and increase its quantity.
			const existingItem = prevState.cart.find((item) => item.id === safePayload.id);
			if (existingItem) {
				return {
					...prevState,
					cart: prevState.cart.map((item) =>
						item.id === safePayload.id
							? { ...item, quantity: (item.quantity || 1) + 1 }
							: item
					),
				};
			}

			return {
				...prevState,
				cart: [...prevState.cart, { ...safePayload, quantity: 1 }],
			};
		});
	};

	const removeFromCart = (payload) => {
		setState((prevState) => {
			// Remove only one unit per action and drop the line at zero.
			const existingItem = prevState.cart.find((item) => item.id === payload.id);
			if (!existingItem) {
				return prevState;
			}
			if ((existingItem.quantity || 1) > 1) {
				return {
					...prevState,
					cart: prevState.cart.map((item) =>
						item.id === payload.id
							? { ...item, quantity: (item.quantity || 1) - 1 }
							: item
					),
				};
			}

			return {
				...prevState,
				cart: prevState.cart.filter((item) => item.id !== payload.id),
			};
		});
	};

	return {
		state,
		addToCart,
		removeFromCart
	};
}

export default useInitialState;

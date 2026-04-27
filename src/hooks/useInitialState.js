import { useState } from "react";

const initialState = {
	cart: [],
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = (payload) => {
		setState((prevState) => {
			// Store a single cart line per product and increase its quantity.
			const existingItem = prevState.cart.find((item) => item.id === payload.id);
			if (existingItem) {
				return {
					...prevState,
					cart: prevState.cart.map((item) =>
						item.id === payload.id
							? { ...item, quantity: (item.quantity || 1) + 1 }
							: item
					),
				};
			}

			return {
				...prevState,
				cart: [...prevState.cart, { ...payload, quantity: 1 }],
			};
		});
	};

	const removeFromCart = (payload) => {
		setState((prevState) => {
			// Current remove behavior deletes the entire product line.
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

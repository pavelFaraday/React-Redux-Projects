import { actionTypes } from "../constants/actionTypes";

/* ------------------------- Define Action-Creators ------------------------- */
export const setProducts = (products) => {
	return {
		type: actionTypes.SET_PRODUCTS,
		payload: products,
	};
};
export const selectedProducts = (product) => {
	return {
		type: actionTypes.SELECTED_PRODUCT,
		payload: product,
	};
};

// Missing one last Action-Creator ("REMOVE_SELECTED_PRODUCT:")...

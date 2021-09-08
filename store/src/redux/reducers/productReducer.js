import { actionTypes } from "../constants/actionTypes";

const intialState = {
	products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
	switch (type) {
		case actionTypes.SET_PRODUCTS:
			return { ...state, products: payload };
		default:
			return state;
	}
};

import { combineReducers } from "redux";
import { productsReducer } from "./productReducer";

// combine all reducer here..
const reducers = combineReducers({
	allProducts: productsReducer,
});

export default reducers;

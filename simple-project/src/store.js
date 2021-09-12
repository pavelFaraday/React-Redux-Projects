import { createStore, combineReducers } from "redux";
import homePageReducer from "./components/HomePage/reducers";

const allReducers = combineReducers({ homePageReducer });
const store = createStore(allReducers);

export default store;

import { createStore, combineReducers } from "redux";
import homePageReducer from "./components/HomePage/reducers";
import userPageReducer from "./components/UserPage/reducer";

const allReducers = combineReducers({ homePageReducer, userPageReducer });
const store = createStore(allReducers);

export default store;

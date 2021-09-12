import { ActionTypes } from "./constants";

const defaultState = {
	user: null,
};

const userPageReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ActionTypes.SET_USER:
			return { ...state, user: action.payload };
		default:
			return state;
	}
};

export default userPageReducer;

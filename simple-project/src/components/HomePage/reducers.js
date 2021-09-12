const defaultState = {
	users: ["No users!"],
};

const homePageReducer = (state = defaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default homePageReducer;

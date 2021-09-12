import { createSelector } from "reselect";

const userPageState = (state) => state.userPageReducer;

export const makeSelectUser = createSelector(
	userPageState,
	(userPageReducer) => userPageReducer.user
);

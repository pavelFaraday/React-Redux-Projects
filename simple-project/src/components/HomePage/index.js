import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";
import Axios from "axios";
import { setUsers } from "./actions";

const stateSelector = createSelector(makeSelectUsers, (users) => ({ users }));

const actionDispatch = (dispatch) => ({
	setUser: (users) => dispatch(setUsers(users)),
});

const HomePage = (props) => {
	const { users } = useSelector(stateSelector);
	const { setUser } = actionDispatch(useDispatch());
	const fetchUsers = async () => {
		const response = await Axios.get("https://reqres.in/api/users").catch(
			(err) => {
				console.log("error ", err);
			}
		);

		setUser(response.data.data);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	console.log("Users:", users);

	return (
		<div>
			<h1>Hello Lorem Ipsum</h1>
		</div>
	);
};

export default HomePage;

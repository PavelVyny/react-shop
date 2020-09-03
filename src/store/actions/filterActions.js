import axios from "axios";

import {
	GET_ORIGINS_SUCCESS,
	GET_ORIGINS_FAILURE,
	GET_ORIGINS_STARTED,
} from "./Types";


export const GET_ORIGINS_ACTION = () => {
	return dispatch => {
		dispatch(addOriginsStarted());

		axios
			.get(`https://yalantis-react-school-api.yalantis.com/api/v1/products-origins`)
			.then(res => {
				dispatch(addOriginsSuccess(res.data.items));
			})
			.catch(err => {
				dispatch(addOriginsFailure(err.message));
			});

	};
};

const addOriginsSuccess = origins => ({
	type: GET_ORIGINS_SUCCESS,
	payload: origins
});

const addOriginsStarted = () => ({
	type: GET_ORIGINS_STARTED
});

const addOriginsFailure = error => ({
	type: GET_ORIGINS_FAILURE,
	payload: {
		error
	}
});
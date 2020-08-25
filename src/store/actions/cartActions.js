import axios from "axios";

import {
	GET_ITEMS_SUCCESS,
	GET_ITEMS_FAILURE,
	GET_ITEMS_STARTED,
	ADD_ITEM,
	INCREMENT_ITEM,
	DECREMENT_ITEM,
	REMOVE_ITEM,
} from "./Types";


export const GET_ITEMS_ACTION = () => {
	return dispatch => {
		dispatch(addTodoStarted());

		axios
			.get(`https://yalantis-react-school-api.yalantis.com/api/v1/products?perPage=200&origins=`)
			.then(res => {
				dispatch(addTodoSuccess(res.data.items));
			})
			.catch(err => {
				dispatch(addTodoFailure(err.message));
			});

	};
};

const addTodoSuccess = items => ({
	type: GET_ITEMS_SUCCESS,
	payload: items
});

const addTodoStarted = () => ({
	type: GET_ITEMS_STARTED
});

const addTodoFailure = error => ({
	type: GET_ITEMS_FAILURE,
	payload: {
		error
	}
});

export const ADD_ITEM_ACTION = (item) => (dispatch) => {
	dispatch({
		type: ADD_ITEM,
		payload: item,
	});
};

export const INCREMENT_ITEM_ACTION = (id) => (dispatch) => {
	dispatch({
		type: INCREMENT_ITEM,
		payload: id,
	});
};

export const DECREMENT_ITEM_ACTION = (id) => (dispatch) => {
	dispatch({
		type: DECREMENT_ITEM,
		payload: id,
	});
};

export const REMOVE_ITEM_ACTION = (id) => (dispatch) => {
	dispatch({
		type: REMOVE_ITEM,
		payload: id,
	});
};

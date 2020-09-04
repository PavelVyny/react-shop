import axios from "axios";

import {
	GET_ITEMS_SUCCESS,
	GET_ITEMS_FAILURE,
	GET_ITEMS_STARTED,
	GET_ITEM_SUCCESS,
	GET_ITEM_FAILURE,
	GET_ITEM_STARTED,
	ADD_ITEM,
	INCREMENT_ITEM,
	DECREMENT_ITEM,
	REMOVE_ITEM,
} from "./Types";


export const GET_ITEMS_ACTION = () => {
	return dispatch => {
		dispatch(addItemsStarted());
		axios
			.get(`https://yalantis-react-school-api.yalantis.com/api/v1/products?perPage=200`)
			.then(res => {
				dispatch(addItemsSuccess(res.data.items));
			})
			.catch(err => {
				dispatch(addItemsFailure(err.message));
			});

	};
};

const addItemsSuccess = items => ({
	type: GET_ITEMS_SUCCESS,
	payload: items
});

const addItemsStarted = () => ({
	type: GET_ITEMS_STARTED
});

const addItemsFailure = error => ({
	type: GET_ITEMS_FAILURE,
	payload: {
		error
	}
});


export const GET_ITEM_ACTION = (id) => {
	return dispatch => {
		dispatch(addItemStarted());

		axios
			.get(`https://yalantis-react-school-api.yalantis.com/api/v1/products/${id}`)
			.then(res => {
				dispatch(addItemSuccess(res.data));
			})
			.catch(err => {
				dispatch(addItemFailure(err.message));
			});

	};
};

const addItemSuccess = curentItem => ({
	type: GET_ITEM_SUCCESS,
	payload: curentItem
});

const addItemStarted = () => ({
	type: GET_ITEM_STARTED
});

const addItemFailure = error => ({
	type: GET_ITEM_FAILURE,
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
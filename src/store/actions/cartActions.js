import axios from "axios";
import config from '../../config'

import {
	GET_ITEMS_SUCCESS,
	GET_ITEMS_FAILURE,
	GET_ITEMS_STARTED,
	GET_MY_ITEMS_FAILURE,
	GET_MY_ITEMS_STARTED,
	GET_ITEM_SUCCESS,
	GET_ITEM_FAILURE,
	GET_ITEM_STARTED,
	CREATE_ITEM_SUCCESS,
	CREATE_ITEM_FAILURE,
	CREATE_ITEM_STARTED,
	ADD_ITEM,
	INCREMENT_ITEM,
	DECREMENT_ITEM,
	REMOVE_ITEM,
} from "./Types";


export const CREATE_ITEM_ACTION = (values) => {

	return dispatch => {
		dispatch(createItemStarted());
		axios.post(`${config.apiUrl}/products`,
			{
				"product": {
					"name": values.name,
					"price": parseInt(`${values.price}`, 10),
					"origin": values.origin
				},
			},
			{
				headers: {
					'Authorization': config.token
				},
			}
		).then(res => {
			dispatch(createItemSuccess(res.data.items));
		})
			.catch(err => {
				dispatch(createItemFailure(err.message));
			});
	};
};

const createItemSuccess = newItem => ({
	type: CREATE_ITEM_SUCCESS,
	payload: newItem
});

const createItemStarted = () => ({
	type: CREATE_ITEM_STARTED
});

const createItemFailure = error => ({
	type: CREATE_ITEM_FAILURE,
	payload: {
		error
	}
});



export const GET_MY_ITEMS_ACTION = () => {
	return dispatch => {
		dispatch(addMyItemsStarted());
		axios
			.get(`${config.apiUrl}/products?perPage=20&editable=true`,
			{
				headers: {
					'Authorization': config.token
				},
			}

			)
			.then(res => {
				dispatch(addItemsSuccess(res.data.items));
			})
			.catch(err => {
				dispatch(addMyItemsFailure(err.message));
			});

	};
};


const addMyItemsStarted = () => ({
	type: GET_MY_ITEMS_STARTED
});

const addMyItemsFailure = error => ({
	type: GET_MY_ITEMS_FAILURE,
	payload: {
		error
	}
});



export const GET_ITEMS_ACTION = (pageSize, page) => {
	return dispatch => {
		dispatch(addItemsStarted());
		axios
			.get(`${config.apiUrl}/products?page=${page}&perPage=${pageSize}`)
			.then(res => {
				dispatch(addItemsSuccess(res.data));
				console.log(res.data)
			})
			.catch(err => {
				dispatch(addItemsFailure(err.message));
			});

	};
};

const addItemsSuccess = data => ({
	type: GET_ITEMS_SUCCESS,
	payload: data
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
			.get(`${config.apiUrl}/products/${id}`)
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
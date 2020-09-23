import axios from "axios";
import config from '../../config'

import {
	GET_ORIGINS_SUCCESS,
	GET_ORIGINS_FAILURE,
	GET_ORIGINS_STARTED,
	GET_ITEMS_SUCCESS,
	START_FILTRED_PRODUCTS,
	START_MY_FILTRED_PRODUCTS,
	GET_MY_FILTRED_PRODUCTS_FAILURE,
	SET_SELECTED_COUNTRY,
	SET_MAX_MIN_PRICE
} from "./Types";


export const GET_ORIGINS_ACTION = () => {
	return dispatch => {
		dispatch(addOriginsStarted());
		axios
			.get(`${config.apiUrl}/products-origins`)
			.then(res => {
				const {data:{items}} = res;
				const arr =[];
				items.forEach(item => {
					arr.push({value: item.value, label: item.displayName})
				});
				dispatch(addOriginsSuccess(arr));
			})
			.catch(err => {
				dispatch(addOriginsFailure(err.message));
			});
	};
};
export const GET_FILTRED_PRODUCTS = (selectedCountry = [''],price=[0,3000]) => dispatch => {

	dispatch(startFiltred());
	axios
		.get(`${config.apiUrl}/products?origins=${selectedCountry}&minPrice=${price[0]}&maxPrice=${price[1]}`)
		.then(res => {
			dispatch(addItemsForOriginsSuccess(res.data));
		})
		.catch(err => {
			dispatch(addOriginsFailure(err.message));
		});	
}

const addItemsForOriginsSuccess = data => ({
	type: GET_ITEMS_SUCCESS,
	payload: data
});

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

const startFiltred = () => ({
	type: START_FILTRED_PRODUCTS,
});

export const setSelectedCountry = countries => ({
	type:SET_SELECTED_COUNTRY,
	payload: countries,
});

export const setMaxMinPrice = value => ({
	type: SET_MAX_MIN_PRICE,
	payload: value
})

export const GET_MY_FILTRED_PRODUCTS = (selectedCountry = [''],price=[0,3000]) => dispatch => {

	dispatch(startMyProductsFilter());
	axios
		.get(`${config.apiUrl}/products?origins=${selectedCountry}&minPrice=${price[0]}&maxPrice=${price[1]}&editable=true`,
		{
			headers: {
				'Authorization': config.token
			},
		}
		)
		.then(res => {
			dispatch(addMyProductsFiltredSuccess(res.data));
		})
		.catch(err => {
			dispatch(addMyIProductsFiltredFailure(err.message));
		});	
}

const startMyProductsFilter = () => ({
	type: START_MY_FILTRED_PRODUCTS,
});

const addMyProductsFiltredSuccess = data => ({
	type: GET_ITEMS_SUCCESS,
	payload: data
});

const addMyIProductsFiltredFailure = error => ({
	type: GET_MY_FILTRED_PRODUCTS_FAILURE,
	payload: {
		error
	}
});


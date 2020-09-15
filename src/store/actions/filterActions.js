import axios from "axios";
import config from '../../config'

import {
	GET_ORIGINS_SUCCESS,
	GET_ORIGINS_FAILURE,
	GET_ORIGINS_STARTED,
	START_FILTRED_ORIGINS,
	LOAD_FILTRED_ORIGINS_SUCCESS,
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
export const GET_FILTRED_ORIGINS = (selectedCountry = [''],price=[0,1000]) => dispatch => {

	dispatch(startFiltred());
	axios
		.get(`${config.apiUrl}/products?origins=${selectedCountry}&minPrice=${price[0]}&maxPrice=${price[1]}`)
		.then(res => {
			dispatch(addItemsForOriginsSuccess(res.data.items));
		})
		.catch(err => {
			dispatch(addOriginsFailure(err.message));
		});
	
	
}

const addItemsForOriginsSuccess = items => ({
	type: LOAD_FILTRED_ORIGINS_SUCCESS,
	payload: items
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
	type: START_FILTRED_ORIGINS,
});

export const setSelectedCountry = countres => ({
	type:SET_SELECTED_COUNTRY,
	payload: countres,
});

export const setMaxMinPrice = value => ({
	type: SET_MAX_MIN_PRICE,
	payload: value
})


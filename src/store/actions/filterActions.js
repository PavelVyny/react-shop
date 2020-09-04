import axios from "axios";

import {
	GET_ORIGINS_SUCCESS,
	GET_ORIGINS_FAILURE,
	GET_ORIGINS_STARTED,
	START_FILTRED_ORIGINS,
	LOAD_FILTRED_ORIGINS_SUCCESS,
} from "./Types";


export const GET_ORIGINS_ACTION = () => {
	return dispatch => {
		dispatch(addOriginsStarted());
		axios
			.get(`https://yalantis-react-school-api.yalantis.com/api/v1/products-origins`)
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
export const GET_FILTRED_ORIGINS = selectedCountry => dispatch => {

	dispatch(startFiltred());
	axios
		.get(`https://yalantis-react-school-api.yalantis.com/api/v1/products?origins=${selectedCountry}`)
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
})


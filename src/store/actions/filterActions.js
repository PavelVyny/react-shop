import {
	SET_SELECTED_COUNTRY,
	SET_MAX_MIN_PRICE
} from "./Types";


export const setSelectedCountry = countries => ({
	type: SET_SELECTED_COUNTRY,
	payload: countries,
});

export const setMaxMinPrice = value => ({
	type: SET_MAX_MIN_PRICE,
	payload: value
})

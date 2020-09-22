import {
	GET_ITEMS_SUCCESS,
	GET_ITEM_SUCCESS,
	ADD_ITEM,
	INCREMENT_ITEM,
	DECREMENT_ITEM,
	REMOVE_ITEM,
	GET_ORIGINS_SUCCESS,
	SET_SELECTED_COUNTRY,
	SET_MAX_MIN_PRICE
} from "../actions/Types";
import { add, decrement, increment, remove } from "../../utils";

const initialState = {
	pageSize: 6,
	pages: 10,
	page: 1,
	items: [],
	curentItem: {},
	cartList: [],
	countryList: [],
	selectedCountry: [],
	rangePrice: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_ITEMS_SUCCESS:
			return { ...state, items: action.payload.items, page: action.payload.page };

		case GET_ITEM_SUCCESS:
			return { ...state, curentItem: action.payload };

		case ADD_ITEM: {
			return { ...state, cartList: add(state, action.payload.id) };
		}
		case GET_ORIGINS_SUCCESS: {
			return { ...state, countryList: action.payload };
		}
		case INCREMENT_ITEM:
			return {
				...state,
				cartList: increment(state, action.payload),
			};

		case SET_SELECTED_COUNTRY:
			return { ...state, selectedCountry: action.payload }

		case SET_MAX_MIN_PRICE:
			return { ...state, rangePrice: action.payload }

		case DECREMENT_ITEM:
			return {
				...state,
				cartList: decrement(state, action.payload),
			};
			
		case REMOVE_ITEM:
			return {
				...state,
				cartList: remove(state, action.payload),
			};

		default:
			return state;
	}
}

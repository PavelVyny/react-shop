import {
	GET_ITEMS_SUCCESS,
	PUT_ITEM,
	PUT_ITEMS,
	ADD_ITEM,
	INCREMENT_ITEM,
	DECREMENT_ITEM,
	REMOVE_ITEM,
	PUT_ORIGIN,
	SET_SELECTED_COUNTRY,
	SET_MAX_MIN_PRICE,
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

		case PUT_ITEMS:
			return { ...state, items: action.payload.items, page: action.payload.page };

		case PUT_ITEM:
			return { ...state, curentItem: action.payload };

		case ADD_ITEM: {
			return { ...state, cartList: add(state, action.payload.id) };
		}

		case PUT_ORIGIN: {
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

import {
	GET_ITEMS_SUCCESS,
	GET_ITEM_SUCCESS,
	ADD_ITEM,
	INCREMENT_ITEM,
	DECREMENT_ITEM,
	REMOVE_ITEM,
	GET_ORIGINS_SUCCESS,
	LOAD_FILTRED_ORIGINS_SUCCESS
} from "../actions/Types";
import { add, decrement, increment, remove } from "../../utils";

const initialState = {
	items: [],
	curentItem: [],
	cartList: [],
	countryList:[],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_ITEMS_SUCCESS:
			return { ...state, items: action.payload };

		case GET_ITEM_SUCCESS:
			return { ...state, curentItem: action.payload };

		case ADD_ITEM: {
			return { ...state, cartList: add(state, action.payload.id) };
		}
		case GET_ORIGINS_SUCCESS : {
			return Object.assign({}, state, {countryList: action.payload});
		}
		case INCREMENT_ITEM:
			return {
				...state,
				cartList: increment(state, action.payload),
			};
		case LOAD_FILTRED_ORIGINS_SUCCESS: 
			return Object.assign({}, state, {items: action.payload})
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

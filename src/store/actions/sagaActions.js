import {
	LOAD_ITEMS,
	LOAD_MY_ITEMS,
	PUT_ITEMS,
	


} from "./Types";


export const LOAD_ITEMS_ACTION = (pageSize, page) => {
	return {
		type: LOAD_ITEMS,
		pageSize,
		page
	}
}

export const PUT_ITEMS_ACTION = (data) => {
	return {
		type: PUT_ITEMS,
		payload: data
	}
}


export const LOAD_MY_ITEMS_ACTION = (pageSize, page) => {
	return {
		type: LOAD_MY_ITEMS,
		pageSize,
		page
	}
}

export const PUT_MY_ITEMS_ACTION = (data) => {
	return {
		type: PUT_ITEMS,
		payload: data
	}
}





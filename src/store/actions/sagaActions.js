import {
	LOAD_ITEMS,
	LOAD_ITEM,
	PUT_ITEM,
	LOAD_MY_ITEMS,
	PUT_ITEMS,
	LOAD_NEW_ITEM,
	PUT_NEW_ITEM,
	LOAD_EDITED_ITEM,
	PUT_EDITED_ITEM,
	LOAD_ORIGIN,
	PUT_ORIGIN,
	LOAD_FILTERS,
	LOAD_MY_FILTERS


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

export const LOAD_NEW_ITEM_ACTION = (values) => {
	return {
		type: LOAD_NEW_ITEM,
		values
	}
}

export const PUT_NEW_ITEM_ACTION = (newItem) => {
	return {
		type: PUT_NEW_ITEM,
		payload: newItem
	}
}

export const LOAD_ITEM_ACTION = id => ({
	type: LOAD_ITEM,
	id
})

export const PUT_ITEM_ACTION = curentItem => ({
	type: PUT_ITEM,
	payload: curentItem
});

export const LOAD_EDITED_ITEM_ACTION = (values, id) => ({
	type: LOAD_EDITED_ITEM,
	values,
	id
})

export const PUT_EDITED_ITEM_ACTION = editedItem => ({
	type: PUT_EDITED_ITEM,
	payload: editedItem
});



export const LOAD_ORIGIN_ACTION = () => ({
	type: LOAD_ORIGIN,
})

export const PUT_ORIGIN_ACTION = origins => ({
	type: PUT_ORIGIN,
	payload: origins
});


export const LOAD_FILTERS_ACTION = (selectedCountry, price) => ({
	type: LOAD_FILTERS,
	selectedCountry,
	price
})

export const LOAD_MY_FILTERS_ACTION = (selectedCountry, price) => ({
	type: LOAD_MY_FILTERS,
	selectedCountry,
	price
})

export const PUT_FILTRED_ITEMS_ACTION = (data) => ({
	type: PUT_ITEMS,
	payload: data
})

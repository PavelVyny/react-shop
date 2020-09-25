import { takeEvery, put, call, fork, debounce } from 'redux-saga/effects'
import axios from 'axios'
import config from '../../config'

import {
	PUT_ITEMS_ACTION,
	PUT_MY_ITEMS_ACTION,
	PUT_NEW_ITEM_ACTION,
	PUT_ITEM_ACTION,
	PUT_EDITED_ITEM_ACTION,
	PUT_ORIGIN_ACTION,
	PUT_FILTRED_ITEMS_ACTION,
} from "../../store/actions/sagaActions";

import {
	LOAD_ITEMS,
	LOAD_ITEM,
	LOAD_MY_ITEMS,
	LOAD_NEW_ITEM,
	LOAD_EDITED_ITEM,
	LOAD_ORIGIN,
	LOAD_FILTERS,
	LOAD_MY_FILTERS,
} from '../../store/actions/Types'

export default function* rootSaga() {
	yield fork(watchLoadItems)
	yield fork(watchLoadMyItems)
	yield fork(watchLoadNewItem)
	yield fork(watchLoadItem)
	yield fork(watchEditItem)
	yield fork(watchLoadOrigin)
	yield fork(watchLoadFilters)
	yield fork(watchLoadMyFilters)

}


//get all products 
function fetchItems(pageSize, page) {
	return axios
		.get(`${config.apiUrl}/products?page=${page}&perPage=${pageSize}`)
}



function* workerLoadItems(action) {
	const response = yield call(fetchItems, action.pageSize, action.page)
	const data = response.data;
	yield put(PUT_ITEMS_ACTION(data))
}

function* watchLoadItems() {
	yield takeEvery(LOAD_ITEMS, workerLoadItems)
}



//get my products

function fetchMyItems(pageSize, page) {
	return axios
		.get(`${config.apiUrl}/products?page=${page}&perPage=${pageSize}&editable=true`,
			{
				headers: {
					'Authorization': config.token
				},
			}
		)
}

function* workerLoadMyItems(action) {
	const response = yield call(fetchMyItems, action.pageSize, action.page)
	const data = response.data;
	yield put(PUT_MY_ITEMS_ACTION(data))
}

export function* watchLoadMyItems() {
	yield takeEvery(LOAD_MY_ITEMS, workerLoadMyItems)
}



//get one item

function fetchItem(id) {
	return axios
		.get(`${config.apiUrl}/products/${id}`)
}

function* workerLoadItem(action) {
	const response = yield call(fetchItem, action.id)
	const data = response.data;
	yield put(PUT_ITEM_ACTION(data))
}

export function* watchLoadItem() {
	yield takeEvery(LOAD_ITEM, workerLoadItem)
}




// create new product

function fetchNewItem(values) {
	return axios
		.post(`${config.apiUrl}/products`,
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
		)
}

function* workerCreateItem(action) {
	const response = yield call(fetchNewItem, action.values)
	const data = response.data;
	yield put(PUT_NEW_ITEM_ACTION(data))
}

export function* watchLoadNewItem() {
	yield takeEvery(LOAD_NEW_ITEM, workerCreateItem)
}




//edit my product

function fetchEditedItem(values, id) {
	return axios
		.patch(`${config.apiUrl}/products/${id}`,
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

		)
}

function* workerEditedItem(action) {
	const response = yield call(fetchEditedItem, action.values, action.id)
	const data = response.data;
	yield put(PUT_EDITED_ITEM_ACTION(data))
}

export function* watchEditItem() {
	yield takeEvery(LOAD_EDITED_ITEM, workerEditedItem)
}



// get the origin of products

function fetchOrigin() {
	return axios
		.get(`${config.apiUrl}/products-origins`)
}

function* workerLoadOrigin() {
	const response = yield call(fetchOrigin)

	const { data: { items } } = response;
	const origins = [];
	items.forEach(item => {
		origins.push({ value: item.value, label: item.displayName })
	});


	yield put(PUT_ORIGIN_ACTION(origins))
}

export function* watchLoadOrigin() {
	yield takeEvery(LOAD_ORIGIN, workerLoadOrigin)
}




// get filtred products

function fetchFilters(selectedCountry = [''], price = [0, 3000]) {
	return axios
		.get(`${config.apiUrl}/products?origins=${selectedCountry}&minPrice=${price[0]}&maxPrice=${price[1]}`)
}

function* workerLoadFilters(action) {
	const response = yield call(fetchFilters, action.selectedCountry, action.price)
	const data = response.data;

	yield put(PUT_FILTRED_ITEMS_ACTION(data))
}

export function* watchLoadFilters() {
	yield debounce(1000, LOAD_FILTERS, workerLoadFilters)
}




// get my filtred products

function fetchMyFilters(selectedCountry = [''], price = [0, 3000]) {
	return axios
		.get(`${config.apiUrl}/products?origins=${selectedCountry}&minPrice=${price[0]}&maxPrice=${price[1]}&editable=true`,
			{
				headers: {
					'Authorization': config.token
				},
			}
		)
}

function* workerLoadMyFilters(action) {
	const response = yield call(fetchMyFilters, action.selectedCountry, action.price)
	const data = response.data;

	yield put(PUT_FILTRED_ITEMS_ACTION(data))
}

export function* watchLoadMyFilters() {
	yield debounce(1000, LOAD_MY_FILTERS, workerLoadMyFilters)
}

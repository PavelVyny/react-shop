import { takeEvery, put, call, fork } from 'redux-saga/effects'
import axios from 'axios'
import config from '../../config'

import {
	PUT_ITEMS_ACTION,
	PUT_MY_ITEMS_ACTION,
} from "../../store/actions/sagaActions";

import {
	LOAD_ITEMS,
	LOAD_MY_ITEMS,
} from '../../store/actions/Types'

export default function* rootSaga() {
	yield fork(watchLoadMyItems)
	yield fork(watchLoadItems)
	

	// code after fork-effect
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
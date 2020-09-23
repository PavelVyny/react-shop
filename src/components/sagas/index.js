import { takeEvery, put, call } from 'redux-saga/effects'
import { LOAD_ITEMS } from '../../store/actions/Types'
import axios from 'axios'
import config from '../../config'

import { PUT_ITEMS_ACTION } from "../../store/actions/cartActions";

function fetchItems(pageSize, page) {
	return axios
		.get(`${config.apiUrl}/products?page=${page}&perPage=${pageSize}`)
		.then(res => { console.log(res.data) })
}


function* workerLoadItems(pageSize, page) {

const data = yield call(fetchItems, pageSize, page)
yield put(PUT_ITEMS_ACTION(data))

}

export function* watchLoadItems() {
	yield takeEvery(LOAD_ITEMS, workerLoadItems)
}
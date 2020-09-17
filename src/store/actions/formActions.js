import axios from "axios";
import config from '../../config'

import {

	PATH_ITEM_SUCCESS,
	PATH_ITEM_FAILURE,
	PATH_ITEM_STARTED,

} from "./Types";


export const PATH_ITEM_ACTION = (values, id) => {
	return dispatch => {
		dispatch(pathItemStarted());

		axios
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
			.then(res => {
				dispatch(pathItemSuccess(res.data.item));
			})
			.catch(err => {
				dispatch(pathItemFailure(err.message));
			});

	};
};

const pathItemSuccess = editedItem => ({
	type: PATH_ITEM_SUCCESS,
	payload: editedItem
});

const pathItemStarted = () => ({
	type: PATH_ITEM_STARTED
});

const pathItemFailure = error => ({
	type: PATH_ITEM_FAILURE,
	payload: {
		error
	}
});

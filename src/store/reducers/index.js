import { combineReducers } from 'redux';

import contactReducer from './itemsReducer';

export default combineReducers({
	products: contactReducer,
});

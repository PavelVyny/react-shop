import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger";

import rootReducer from "./reducers/index";
import { watchLoadItems } from "../components/sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware( sagaMiddleware, thunk))
);

sagaMiddleware.run(watchLoadItems)

export default store;

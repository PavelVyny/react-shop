import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger";

import rootReducer from "./reducers/index";
import rootSaga from "../components/sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware( logger, sagaMiddleware, thunk))
);

sagaMiddleware.run(rootSaga)

export default store;

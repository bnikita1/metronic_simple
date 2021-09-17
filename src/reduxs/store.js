import React from "react";
// import reportWebVitals from "./reportWebVitals";
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/index";
// import {rootReducer} from '../redux/rootReducer'
import {persistStore} from "redux-persist";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);

// reportWebVitreportWebVitals.jsals();
export default store;
import { combineReducers } from 'redux';
// import * as auth from "../../app/modules/Auth/_redux/authRedux";

import authReducer from "./auth";

export default combineReducers({
auth: authReducer // auth.reducer
})
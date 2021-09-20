import React from 'react'
import { USER_LOGIN, USER_REGISTERATION,GET_CATEGORY, ADD_CATEGORY,UPDATE_CATEGORY,DELETE_CATEGORY,USER_LOGOUT,GET_TOKEN_USER } from '../actionTypes';
import axios from 'axios';
import { toast } from 'react-toastify';
export const registerUser = (payload) => (dispatch) => dispatch(registerUserInit(payload));

export const registerUserInit = (payload)  => async (dispatch) => {
    dispatch({
        type: USER_REGISTERATION.USER_REGISTERATION_INIT
    });
    console.log("PAYLOAD", payload);
     axios.post('http://localhost:9000/api/users', { email: payload.email, fullname: payload.fullname, username: payload.username, password: payload.password }).then((res,err) => {
        if (err)
        {
            dispatch(registerUserError(err));
        }
        console.log("USER Registerd", { res, err });
        dispatch(registerUserSuccess(res));
    });
}


export const registerUserSuccess = (userData) => (dispatch) => {
    console.log("RESPONSE in DISPATCHS  ", userData.data);
    dispatch({
        type: USER_REGISTERATION.USER_REGISTERATION_SUCCESS,
        payload: { user: userData.data }
    });
}

export const registerUserError = (err) => (dispatch) => {
    dispatch({
        type: USER_REGISTERATION.USER_REGISTERATION_ERROR,
        payload: { err: err }
    });

}


export const loginUser = (payload) => (dispatch) => dispatch(loginUserInit(payload));

export const loginUserInit = (payload)  => async (dispatch) => {
    dispatch({
        type: USER_LOGIN.USER_LOGIN_INIT
    });
    console.log("PAYLOAD LOGIN", payload);
    //  axios.post('http://localhost:9000/api/users', { email: payload.email, fullname: payload.fullname, username: payload.username, password: payload.password }).then((res,err) => {
    return axios.post('http://localhost:9000/api/users/login', { email: payload.email, password: payload.password }).then((res, err) => {
        if (err) {
            dispatch(loginUserError(err));
        }
        console.log("USER LOGIN", { res, err });
        if (res.data.user !== null) {
            dispatch(loginUserSuccess(res));
            
        }
        else {
            toast.error('Invalid username or password');
            dispatch(loginUserError(res));
        }
    });
}


export const loginUserSuccess = (userData) => (dispatch) => {
    console.log("RESPONSE in DISPATCHS  ", userData.data);
    dispatch({
        type: USER_LOGIN.USER_LOGIN_SUCCESS,
        payload: { user: userData.data }
    });
}

export const loginUserError = (err) => (dispatch) => {
    dispatch({
        type: USER_LOGIN.USER_LOGIN_ERROR,
        payload: { err: err }
    });

}


export const getUserByToken = () => (dispatch) => dispatch(getUserByTokenInit());

export const getUserByTokenInit = ()  => async (dispatch) => {
    dispatch({
        type: GET_TOKEN_USER.GET_TOKEN_USER_INIT
    });
    console.log("PAYLOAD LOGIN",);
    //  axios.post('http://localhost:9000/api/users', { email: payload.email, fullname: payload.fullname, username: payload.username, password: payload.password }).then((res,err) => {
    return axios.get('http://localhost:9000/api/users/auth').then((res, err) => {
        if (err) {
            dispatch(getUserByTokenError(err));
        }
        console.log("USER LOGIN", { res, err });
        if (res.data.user !== null) {
            dispatch(getUserByTokenSuccess(res));
            
        }
        else {
            toast.error('Invalid username or password');
            dispatch(getUserByTokenError(res));
        }
    });
}


export const getUserByTokenSuccess = (userData) => (dispatch) => {
    console.log("RESPONSE in DISPATCHS  ", userData.data);
    dispatch({
        type: GET_TOKEN_USER.GET_TOKEN_USER_SUCCESS,
        payload: { user: userData.data }
    });
}

export const getUserByTokenError = (err) => (dispatch) => {
    dispatch({
        type: GET_TOKEN_USER.GET_TOKEN_USER_ERROR,
        payload: { err: err }
    });

}




// export async function getUserByToken() {
//     console.log("getUserByToken");
//     // Authorization head should be fulfilled in interceptor.
//     // const headers = { Authorization: `Bearer auth-token-jldtuq39hug2sn03i0xtub` };
//     return axios.get('http://localhost:9000/api/users/auth');
//     // console.log("getUserByToken", apiReturn);
//     // return apiReturn;
//     // .then((res) => {
//     //   console.log("res.dataAuthhhh", res.data);
//     //   return [200, { ...res.data, password: undefined }];
//     // }, (error) => {
//     //   return [400];
//     // });
//   }



export const getCategories = () => (dispatch) => dispatch(getCategoriesInit());

export const getCategoriesInit = ()  => async (dispatch) => {
    dispatch({
        type: GET_CATEGORY.GET_CATEGORY_INIT
    });
    console.log("PAYLOAD  ISIPAIp");
    //  axios.post('http://localhost:9000/api/users', { email: payload.email, fullname: payload.fullname, username: payload.username, password: payload.password }).then((res,err) => {
    return axios.get('https://fakestoreapi.com/products').then((res,err)=>{
        if (err)
        {
            dispatch(getCategoriesError(err));
        }
        console.log("USER LOGIN", { res, err });
        dispatch(getCategoriesSuccess(res));
    });
}


export const getCategoriesSuccess = (userData) => (dispatch) => {
    console.log("RESPONSE in DISPATCHS  ", userData.data);
    dispatch({
        type: GET_CATEGORY.GET_CATEGORY_SUCCESS,
        payload: { categories: userData.data }
    });
}

export const getCategoriesError = (err) => (dispatch) => {
    dispatch({
        type: GET_CATEGORY.GET_CATEGORY_ERROR,
        payload: { err: err }
    });

}



export const addCategories = (payload) => (dispatch) => dispatch(addCategoriesInit(payload));

export const addCategoriesInit = (payload)  => async (dispatch) => {
    dispatch({
        type: ADD_CATEGORY.ADD_CATEGORY_INIT
    });
    console.log("PAYLOAD  ISIPAIp");
    //  axios.post('http://localhost:9000/api/users', { email: payload.email, fullname: payload.fullname, username: payload.username, password: payload.password }).then((res,err) => {
    // return axios.get('https://fakestoreapi.com/products').then((res,err)=>{
    //     if (err)
    //     {
    //         dispatch(addCategoriesError(err));
    //     }
    //     console.log("USER LOGIN", { res, err });
// });
    dispatch(addCategoriesSuccess(payload));
}

export const addCategoriesSuccess = (payload) => (dispatch) => {
    console.log("addCategoriesSuccess in DISPATCHS  ", payload);
    dispatch({
        type: ADD_CATEGORY.ADD_CATEGORY_SUCCESS,
        payload: payload
    });
}

export const addCategoriesError = (err) => (dispatch) => {
    dispatch({
        type: ADD_CATEGORY.ADD_CATEGORY_ERROR,
        payload: { err: err }
    });

}



export const updateCategories = (payload) => (dispatch) => dispatch(updateCategoriesInit(payload));

export const updateCategoriesInit = (payload)  => async (dispatch) => {
    dispatch({
        type: UPDATE_CATEGORY.UPDATE_CATEGORY_INIT
    });
    console.log("PAYLOAD  ISIPAIp");
    //  axios.post('http://localhost:9000/api/users', { email: payload.email, fullname: payload.fullname, username: payload.username, password: payload.password }).then((res,err) => {
    // return axios.get('https://fakestoreapi.com/products').then((res,err)=>{
    //     if (err)
    //     {
    //         dispatch(updateCategoriesError(err));
    //     }
    //     console.log("USER LOGIN", { res, err });
    // });
    dispatch(updateCategoriesSuccess(payload));
}


export const updateCategoriesSuccess = (payload) => (dispatch) => {
    console.log("updateCategoriesSuccess in DISPATCHS  ", payload);
    dispatch({
        type: UPDATE_CATEGORY.UPDATE_CATEGORY_SUCCESS,
        payload: payload
    });
}

export const updateCategoriesError = (err) => (dispatch) => {
    dispatch({
        type: UPDATE_CATEGORY.UPDATE_CATEGORY_ERROR,
        payload: { err: err }
    });

}



export const deleteCategories = (payload) => (dispatch) => dispatch(deleteCategoriesInit(payload));

export const deleteCategoriesInit = (payload)  => async (dispatch) => {
    dispatch({
        type: DELETE_CATEGORY.DELETE_CATEGORY_INIT
    });
    // console.log("PAYLOAD  ISIPAIp");
    // //  axios.post('http://localhost:9000/api/users', { email: payload.email, fullname: payload.fullname, username: payload.username, password: payload.password }).then((res,err) => {
    // return axios.get('https://fakestoreapi.com/products').then((res,err)=>{
    //     if (err)
    //     {
    //         dispatch(deleteCategoriesError(err));
    //     }
    //     console.log("USER LOGIN", { res, err });
    // });
    dispatch(deleteCategoriesSuccess(payload));
}


export const deleteCategoriesSuccess = (payload) => (dispatch) => {
    console.log("RESPONSE in DISPATCHS  ", payload);
    dispatch({
        type: DELETE_CATEGORY.DELETE_CATEGORY_SUCCESS,
        payload: { categories: payload}
    });
}

export const deleteCategoriesError = (err) => (dispatch) => {
    dispatch({
        type: DELETE_CATEGORY.DELETE_CATEGORY_ERROR,
        payload: { err: err }
    });

}



export const logoutUser = () => (dispatch) => dispatch(logoutUserInit());

export const logoutUserInit = ()  => async (dispatch) => {
    dispatch({
        type: USER_LOGOUT.USER_LOGOUT_INIT
    });
    dispatch(logoutUserSuccess());
}


export const logoutUserSuccess = () => (dispatch) => {
    console.log("RESPONSE in DISPATCHS LOGOU ");
    dispatch({
        type: USER_LOGOUT.USER_LOGOUT_SUCCESS,
        payload: { }
    });
}

export const logoutUserError = (err) => (dispatch) => {
    dispatch({
        type: USER_LOGOUT.USER_LOGOUT_ERROR,
        payload: { err: err }
    });

}
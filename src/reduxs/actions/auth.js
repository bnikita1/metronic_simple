import React from 'react'
import { USER_LOGIN, USER_REGISTERATION,GET_CATEGORY, ADD_CATEGORY,UPDATE_CATEGORY,DELETE_CATEGORY } from '../actionTypes';
import axios from 'axios';

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
    return axios.post('http://localhost:9000/api/users/login' , { email:payload.email, password:payload.password }).then((res,err)=>{
        if (err)
        {
            dispatch(loginUserError(err));
        }
        console.log("USER LOGIN", { res, err });
        dispatch(loginUserSuccess(res));
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
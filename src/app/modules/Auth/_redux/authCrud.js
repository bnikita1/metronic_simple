import axios from "axios";

export const LOGIN_URL = `${process.env.REACT_APP_API_URL}/auth/login`;
export const REGISTER_URL = "api/auth/register";
export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";
export const ME_URL = `${process.env.REACT_APP_API_URL}/auth/me`;

const instance = axios.create();

export function login(email, password) {
  console.log(":login", email, password);
  return axios.post('http://localhost:9000/api/users/login' || LOGIN_URL, { email, password });
  // .then((res) => {
  //   console.log("...res.data Login", res.data);
  //   return [200, { ...res.data, password: undefined }];
  // }, (error) => {
  //   return [400];
  // });
}
  
export async function register(email, fullname, username, password) {
  console.log("REGISTER_URL", REGISTER_URL);
  console.log(":register", email, fullname, username, password);
  const userData = await axios.post('http://localhost:9000/api/users' || REGISTER_URL, { email, fullname, username, password });
  console.log("UserData in Register", userData);
  return userData;
  // .then((res) => {
  //   console.log("...res.data", res.data);
  //   return [200, { ...res.data, password: undefined }];
  // }, (error) => {
  //   return [400, undefined];
  // });
}

export function requestPassword(email) {
  console.log(":requestPassword", email);
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export async function getUserByToken() {
  console.log("getUserByToken");
  // Authorization head should be fulfilled in interceptor.
  // const headers = { Authorization: `Bearer auth-token-jldtuq39hug2sn03i0xtub` };
  return axios.get('http://localhost:9000/api/users/auth');
  // console.log("getUserByToken", apiReturn);
  // return apiReturn;
  // .then((res) => {
  //   console.log("res.dataAuthhhh", res.data);
  //   return [200, { ...res.data, password: undefined }];
  // }, (error) => {
  //   return [400];
  // });
}

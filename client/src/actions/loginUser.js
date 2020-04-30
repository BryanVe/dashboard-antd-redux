import { LOGIN_USER } from "../constants";

export const loginUserRequest = (credentials, history, popupMessage) => {
  return {
    type: LOGIN_USER.REQUEST,
    credentials,
    history,
    popupMessage,
  };
};

export const loginUserSuccess = (data) => {
  return {
    type: LOGIN_USER.SUCCESS,
    data,
  };
};

export const loginUserFail = (data) => {
  return {
    type: LOGIN_USER.FAIL,
    data,
  };
};

// export const authUserClean = () => {
//   return {
//     type: LOGIN_USER.CLEAN,
//   };
// };

// export const getUserInfoRequest = (token) => {
//   return {
//     type: LOGIN_USER.GET_INFO_REQUEST,
//     payload: token,
//   };
// };
// export const getUserInfoSuccess = (userInfo) => {
//   return {
//     type: LOGIN_USER.GET_INFO_SUCCESS,
//     payload: userInfo,
//   };
// };

// export const getUserInfoFail = (error) => {
//   return {
//     type: LOGIN_USER.GET_INFO_FAIL,
//     payload: error,
//   };
// };

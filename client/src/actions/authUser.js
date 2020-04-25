import { AUTH_USER } from "../constants";

export const authUserRequest = (credentials, history) => {
  return {
    type: AUTH_USER.REQUEST,
    payload: { credentials, history },
  };
};

export const authUserSuccess = (token) => {
  return {
    type: AUTH_USER.SUCCESS,
    payload: token,
  };
};

export const authUserFail = (error) => {
  return {
    type: AUTH_USER.FAIL,
    payload: error,
  };
};

export const authUserClean = () => {
  return {
    type: AUTH_USER.CLEAN,
  };
};

export const getUserInfoRequest = (token) => {
  return {
    type: AUTH_USER.GET_INFO_REQUEST,
    payload: token,
  };
};
export const getUserInfoSuccess = (userInfo) => {
  return {
    type: AUTH_USER.GET_INFO_SUCCESS,
    payload: userInfo,
  };
};

export const getUserInfoFail = (error) => {
  return {
    type: AUTH_USER.GET_INFO_FAIL,
    payload: error,
  };
};

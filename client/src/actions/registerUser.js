import { REGISTER_USER } from "../constants";

export const registerUserRequest = (newUserInfo, history) => {
  return {
    type: REGISTER_USER.REQUEST,
    payload: { newUserInfo, history },
  };
};

export const registerUserSuccess = (message) => {
  return {
    type: REGISTER_USER.SUCCESS,
    payload: message,
  };
};

export const registerUserFail = (error) => {
  return {
    type: REGISTER_USER.FAIL,
    payload: error,
  };
};

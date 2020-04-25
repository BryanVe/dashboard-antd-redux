import { takeLatest, call, put } from "redux-saga/effects";
import { Post, Get } from "../lib/Request";
import {
  authUserSuccess,
  authUserFail,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFail,
} from "../actions";
import { AUTH_USER } from "../constants";

export function* accessConfirmed(token, history) {
  yield put(getUserInfoRequest(token));
  localStorage.setItem("authToken", token);
  history.push("/dashboard");
}

function* authUser({ payload: { credentials, history } }) {
  try {
    const { token } = yield call(Post, "/users/login", credentials);
    yield put(authUserSuccess(token));
    yield accessConfirmed(token, history);
  } catch (error) {
    yield put(authUserFail(error.message));
  }
}

function* getUser({ payload: token }) {
  try {
    const userInfo = yield call(Get, "/users/whoami", {
      "x-access-token": token,
    });
    yield put(getUserInfoSuccess(userInfo));
  } catch (error) {
    yield put(getUserInfoFail(error.message));
  }
}

export function* getUserWatcher() {
  yield takeLatest(AUTH_USER.GET_INFO_REQUEST, getUser);
}

export function* authUserSaga() {
  yield takeLatest(AUTH_USER.REQUEST, authUser);
}

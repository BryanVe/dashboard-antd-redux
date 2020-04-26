import { call, put, takeLatest } from "redux-saga/effects";
import { REGISTER_USER } from "../constants";
import { Post } from "../lib/Request";
import { registerUserSuccess } from "../actions";
import { accessConfirmed } from "./authUser";

function* registerUser({ payload: { newUserInfo, history } }) {
  try {
    const { token, message } = yield call(Post, "/users/register", newUserInfo);
    yield put(registerUserSuccess(message));
    yield accessConfirmed(token, history);
  } catch (error) {
    console.log(error);
  }
}

export default function* registerUserWatcher() {
  yield takeLatest(REGISTER_USER.REQUEST, registerUser);
}
import { all, fork } from "redux-saga/effects";
// import { authUserSaga, getUserWatcher } from "./loginUser";
import loginUserSaga from "./loginUser";
import allShipmentsSaga from "./shipments";
// import registerUserSaga from "./registerUser";

export default function* rootSaga() {
  yield all([
    fork(loginUserSaga),
    // fork(registerUserSaga),
    // fork(getUserWatcher),
    fork(allShipmentsSaga),
  ]);
}

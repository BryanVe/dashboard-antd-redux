import { all, fork } from "redux-saga/effects";
import { authUserSaga, getUserWatcher } from "./authUser";
import { addShipmentWatcher, allShipmentsWatcher } from "./shipments";
import registerUserSaga from "./registerUser";

export default function* rootSaga() {
  yield all([
    fork(authUserSaga),
    fork(registerUserSaga),
    fork(getUserWatcher),
    fork(addShipmentWatcher),
    fork(allShipmentsWatcher),
  ]);
}

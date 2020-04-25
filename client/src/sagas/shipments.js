import { takeLatest, call, put } from "redux-saga/effects";
import { SHIPMENTS } from "../constants";
import {
  shipmentsSuccess,
  shipmentsFail,
  addNewShipmentSuccess,
  addNewShipmentFail,
  openDrawerNewShipment,
} from "../actions";
import { Get, Post } from "../lib/Request";

function* getAllShipments() {
  try {
    const data = yield call(Get, "/shipments/getAll");
    yield put(shipmentsSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(shipmentsFail(error.message));
  }
}

function* allShipmentsWatcher() {
  yield takeLatest(SHIPMENTS.REQUEST, getAllShipments);
}

function* addShipment({ payload: newShipment }) {
  try {
    const message = yield call(Post, "/shipments/save", newShipment);
    yield getAllShipments();
    yield put(addNewShipmentSuccess(message));
    yield put(openDrawerNewShipment());
  } catch (error) {
    yield put(addNewShipmentFail(error.message));
    yield put(openDrawerNewShipment());
  }
}

function* addShipmentWatcher() {
  yield takeLatest(SHIPMENTS.ADD, addShipment);
}

export { addShipmentWatcher, allShipmentsWatcher };

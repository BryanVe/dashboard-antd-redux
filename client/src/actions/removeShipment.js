import { SHIPMENTS } from "../constants";

export const removeShipments = (listOfShipments) => {
  return {
    type: SHIPMENTS.REMOVE,
    payload: listOfShipments,
  };
};

export const removeShipmentsSuccess = (message) => {
  return {
    type: SHIPMENTS.REMOVE_SUCCESS,
    payload: message,
  };
};

export const removeShipmentsFail = (error) => {
  return {
    type: SHIPMENTS.REMOVE_FAIL,
    payload: error,
  };
};

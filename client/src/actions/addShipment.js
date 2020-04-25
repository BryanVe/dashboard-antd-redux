import { SHIPMENTS } from "../constants";

export const openDrawerNewShipment = () => {
  return {
    type: SHIPMENTS.OPEN_DRAWER,
  };
};

export const addNewShipment = (shipment) => {
  return {
    type: SHIPMENTS.ADD,
    payload: shipment,
  };
};

export const addNewShipmentSuccess = (message) => {
  return {
    type: SHIPMENTS.ADD_SUCCESS,
    payload: message,
  };
};
export const addNewShipmentFail = (error) => {
  return {
    type: SHIPMENTS.ADD_FAIL,
    payload: error,
  };
};

import { SHIPMENTS } from "../constants";

export const shipmentsRequest = () => {
  return {
    type: SHIPMENTS.REQUEST,
  };
};

export const shipmentsSuccess = (shipments) => {
  return {
    type: SHIPMENTS.SUCCESS,
    payload: shipments,
  };
};

export const shipmentsFail = (error) => {
  return {
    type: SHIPMENTS.FAIL,
    payload: error,
  };
};

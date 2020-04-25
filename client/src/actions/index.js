import * as sidebarStates from "./sidebarStates";
import * as allShipments from "./allShipments";
import * as authUser from "./authUser";
import * as addShipment from "./addShipment";
import * as removeShipment from "./removeShipment";
import * as registerUser from "./registerUser";

export const {
  cleanSidebarStates,
  desktopSidebarState,
  mobileSidebarState,
} = sidebarStates;
export const {
  shipmentsFail,
  shipmentsRequest,
  shipmentsSuccess,
} = allShipments;
export const {
  authUserClean,
  authUserFail,
  authUserRequest,
  authUserSuccess,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFail,
} = authUser;
export const {
  addNewShipment,
  addNewShipmentFail,
  addNewShipmentSuccess,
  openDrawerNewShipment,
} = addShipment;
export const {
  removeShipments,
  removeShipmentsFail,
  removeShipmentsSuccess,
} = removeShipment;
export const {
  registerUserRequest,
  registerUserSuccess,
  registerUserFail,
} = registerUser;

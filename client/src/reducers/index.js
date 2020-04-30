import { combineReducers } from "redux";
import loginUserReducer from "./loginUser";
import sidebarStatesReducer from "./sidebarStates";
import allShipmentsReducer from "./shipments";
import registerUserReducer from "./registerUser";

const rootReducer = combineReducers({
  currentSession: loginUserReducer,
  sidebarStates: sidebarStatesReducer,
  shipments: allShipmentsReducer,
  registerUserMessages: registerUserReducer,
});

export default rootReducer;

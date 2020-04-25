import { combineReducers } from "redux";
import authUserReducer from "./authUser";
import sidebarStatesReducer from "./sidebarStates";
import { shipmentsReducer, shipmentsMethodsReducer } from "./shipments";
import registerUserReducer from "./registerUser";

const rootReducer = combineReducers({
  currentSession: authUserReducer,
  sidebarStates: sidebarStatesReducer,
  shipments: shipmentsReducer,
  shipmentsMessagesMethods: shipmentsMethodsReducer,
  registerUserMessages: registerUserReducer,
});

export default rootReducer;

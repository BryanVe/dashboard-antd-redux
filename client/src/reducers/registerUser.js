import { REGISTER_USER } from "../constants";

const initialState = {
  loading: false,
  message: "",
  error: "",
};

const registerUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER.REQUEST:
      return { ...state, loading: true };
    case REGISTER_USER.SUCCESS:
      return { ...state, message: action.payload, loading: false };
    case REGISTER_USER.FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default registerUserReducer;

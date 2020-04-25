import { AUTH_USER } from "../constants";

const initialState = {
  loading: false,
  token: localStorage.getItem("authToken"),
  userInfo: {},
  error: null,
};

const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER.REQUEST:
      return { ...state, loading: true };
    case AUTH_USER.SUCCESS:
      return { ...state, token: action.payload, loading: false };
    case AUTH_USER.FAIL:
      return { ...state, error: action.payload, loading: false };
    case AUTH_USER.GET_INFO_REQUEST:
      return { ...state, loading: true };
    case AUTH_USER.GET_INFO_SUCCESS:
      return { ...state, userInfo: action.payload };
    case AUTH_USER.GET_INFO_FAIL:
      return { ...state, error: action.payload };
    case AUTH_USER.CLEAN:
      return initialState;
    default:
      return state;
  }
};

export default authUserReducer;

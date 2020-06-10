import {
  AUTH_SUCCES,
  AUTH_ERROR,
  GET_USER,
  LOGIN_SUCCES,
  LOGIN_ERROR,
  LOG_OUT
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCES:
    case AUTH_SUCCES:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        auth: true,
        mesage: null,
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        auth: true,
        loading: false
      };
    case LOG_OUT:
    case LOGIN_ERROR:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        auth: null,
        mesage: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

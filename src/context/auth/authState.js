import React, { useReducer } from "react";
import AuthReducer from "./authReducer";
import AuthContext from "./authContext";
import axiosClient from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";

import {
  AUTH_SUCCES,
  AUTH_ERROR,
  GET_USER,
  LOGIN_SUCCES,
  LOGIN_ERROR,
  LOG_OUT
} from "../../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    auth: null,
    user: null,
    mesage: null,
    loading: true
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //funciones
  const registerUser = async data => {
    try {
      const response = await axiosClient.post("/api/users", data);
      console.log(response);
      dispatch({
        type: AUTH_SUCCES,
        payload: response.data
      });
      //obtener usuario
      userAuth();
    } catch (error) {
      // console.log(error)
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error"
      };
      dispatch({
        type: AUTH_ERROR,
        payload: alert
      });
    }
  };

  //retorna usuario autenticado
  const userAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }
    try {
      const response = await axiosClient.get("api/auth");
      dispatch({
        type: GET_USER,
        payload: response.data.user
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR
      });
    }
  };

  //inicio de sesion
  const logIn = async data => {
    try {
      const response = await axiosClient.post("/api/auth", data);
      dispatch({
        type: LOGIN_SUCCES,
        payload: response.data
      });
      //obtener usuario
      userAuth();
    } catch (error) {
      console.log(error.response.data.msg);
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error"
      };
      dispatch({
        type: LOGIN_ERROR,
        payload: alert
      });
    }
  };
  //logout
  const logOut = () => {
    dispatch({
      type: LOG_OUT,
    })
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        auth: state.auth,
        user: state.user,
        mesage: state.mesage,
        loading: state.loading,
        registerUser,
        logIn,
        userAuth,
        logOut
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;

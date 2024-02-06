import React, { useContext, useEffect, useState, useReducer } from "react";
import reducer from "../reducers/user_reducer";

const UserContext = React.createContext();

const initialState = {
  isAuthenticated: false,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loginBtn = () => {
    dispatch({type: 'LOGIN'})
  };

  const logoutBtn = () => {
    dispatch({type: 'LOGOUT'})
  }
  return (
    <UserContext.Provider value={{...state, loginBtn, logoutBtn}}>{children}</UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};

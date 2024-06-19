import React from "react";

//redux
import {  Outlet } from "react-router-dom";
import Login from "../Pages/Login";

const AuthRoute = () => {
  ;
  const isAuth = true;

  return isAuth ? <Outlet /> : <Login />;
};

export default AuthRoute;

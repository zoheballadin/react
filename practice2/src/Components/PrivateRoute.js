import { Outlet, Navigate } from "react-router-dom";

import React from 'react'
import { Login } from "./Login";

export const PrivateRoute = () => {
    let token = localStorage.getItem("token")

  return (
    token ? <Outlet/> : <Navigate to="/login"/>
  )
}

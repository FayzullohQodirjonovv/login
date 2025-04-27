import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
    let token = localStorage.getItem("token");
    if (!token){
      return  <Navigate to={"/sign-in"} replace/>
    }
  return (
    <>
    <Outlet/>
    </>
  )
}

export default PrivateRouter
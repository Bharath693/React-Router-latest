import React, { useEffect } from 'react'
import {Route, Navigate, BrowserRouter, Router, Routes} from "react-router-dom";

const ProtectedRoute = ({isAuth:isAuth,Component:Component,rest}) => {
useEffect(() =>{

},[isAuth])
  return (
    // <Route 
    // {...rest}
    // render ={(props) =>{
    //    if(isAuth){
    //        return <Component />
    //    }
    //    else{
    //        return (
    //            <Navigate to="/login" />
    //        )
    //    }
    // }}
    // />
    isAuth ? Component : <Navigate to="/" />
  )
}

export default ProtectedRoute
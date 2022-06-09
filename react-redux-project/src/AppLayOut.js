import { Outlet } from "react-router-dom"
import Header from "./Components/Header/header"
import React from 'react'
import PageNotFound from "./pages/PageNotFound"

const AppLayOut = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default AppLayOut
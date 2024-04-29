import React from 'react'
import Navbar from '../components/Navbar'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  const user = true
  return user ?(
    <>
      <Navbar/>
      <Outlet/>
    </>
  ):(
    <Navigate to="/"/>
  )
}

export default PrivateRouter

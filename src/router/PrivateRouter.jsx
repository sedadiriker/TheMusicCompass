import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRouter = () => {
  // const user = true
  const {user} = useSelector(state => state.auth)
  console.log(user)
  return user ?(
    <>
      <Outlet/>
    </>
  ):(
    <Navigate to="/"/>
  )
}

export default PrivateRouter

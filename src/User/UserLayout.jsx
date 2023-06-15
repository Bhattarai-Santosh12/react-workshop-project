import React from 'react'
import ResponsiveAppBar from '../Components/header'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
      <ResponsiveAppBar/>
      <Outlet/>
    </div>
  );
}

export default UserLayout
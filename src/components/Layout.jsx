import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar/NabBar'

const divFix = {
  width: '100%',
  height: '60px'
}

const Layout = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <NavBar></NavBar>
        <div style={divFix}></div>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout
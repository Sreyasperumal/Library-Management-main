import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function PortalLayout() {
  return (
<div className="sb-nav-fixed">
    <Topbar/>
    <div id="layoutSidenav">
    <div id="layoutSidenav_nav">
        <Sidebar/>
    </div>
    <div id="layoutSidenav_content">
      <Outlet/>
        <Footer/>
     </div>   
    </div>
</div>
  )
}

export default PortalLayout
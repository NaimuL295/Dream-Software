import React from 'react'
import Navbar from '../Share/Navber'
import { Outlet, useLocation } from 'react-router'
import Footer from '../Share/Footer'



export default function LayoutRoot() {
 const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div>
      {!isHome && <Navbar />  }  
   {/* <div style={{ height:"calc(100vh - 600px)" }}> */}
  <Outlet />
{/* </div> */}
      <Footer/>
    </div>
  )
}

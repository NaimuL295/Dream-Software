import React from 'react'
import Navbar from '../Share/Navber'
import { Outlet } from 'react-router'
import Footer from '../Share/Footer'



export default function LayoutRoot() {
  return (
    <div>
      <Navbar/>
   {/* <div style={{ height:"calc(100vh - 00px)" }}> */}
  <Outlet />
{/* </div> */}
      <Footer/>
    </div>
  )
}

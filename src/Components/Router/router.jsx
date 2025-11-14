import React from "react";
import { createBrowserRouter } from "react-router";
import LayoutRoot from "../Layout/LayoutRoot";
import Home from "../../Page/Home/Home";

 export const router = createBrowserRouter([
  { path: "/", Component:LayoutRoot,
    children:[
   {index:true , Component:Home}
    ] },
]);

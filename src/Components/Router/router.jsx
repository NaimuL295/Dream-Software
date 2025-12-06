import React from "react";
import { createBrowserRouter } from "react-router";
import LayoutRoot from "../Layout/LayoutRoot";
import Home from "../../Page/Home/Home";
import Blog from "../../Page/Blog";
import CompanyCulture from "../../Page/CompanyCulture";
import Contact from "../../Page/Contact";
import OurWork from "../../Page/OurWork";
import Services from "../../Page/Services";
import WhyUs from "../../Page/WhyUs";
import TestimonialForm from "../../Page/TestimonialForm";
import ErrorPage from "../Share/ErrorPage";

 export const router = createBrowserRouter([
  { path: "/", 
    Component:LayoutRoot,
    children:[
   {index:true , 
    Component:Home
  },
   
    {path:"blog",
      Component:Blog
    },
    {path:"companyCulture",
      Component:CompanyCulture
    },
    {path:"contact",
      Component:Contact
    },
    {path:"outwork",
      Component:OurWork
    },
    {path:"services",
      Component:Services
    },
    {path:"whyUs",
      Component:WhyUs
    },
    {
      path:"testimonialForm",
      Component:TestimonialForm
    },
    {
      path:"*",
      element:<ErrorPage/>
    }
   
    ] },
]);

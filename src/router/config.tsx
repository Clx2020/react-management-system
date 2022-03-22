// Router.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Demo from "../pages/about/demo";
import Sum from "../pages/about/sum";

// eslint-disable-next-line import/no-anonymous-default-export
export default [{
    path: '/home',
    element: <Home />
 },
 {
    path: '/about',
    element: <About />,
    children:[
        {
            path: 'demo',
            element: <Demo />
         },
         {
            path: 'sum',
            element: <Sum />
         }
    ]
 },
 {
    path: '/',
    element: <Navigate to='About' />
 }]

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistic from './component/Statistic';
import Job from './component/AppliedJob';
import Blog from './component/Blog';
import ErrorPage from './component/ErrorPage';
import Home from './component/Home';
import Feature from './component/Features';
import Viewdetails from './component/Viewseails/Viewdetails';
import { getjobdetails } from './utilities/fakedb';
import AppliedJob from './component/AppliedJob';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/view/:id",
        element:<Viewdetails></Viewdetails>,
        loader: (({params})=>fetch('/Feature.json'))
      }
      ,{
        path: '/statistic',
        element: <Statistic></Statistic>
      },{
        path: '/job',
        element: <AppliedJob></AppliedJob>,
        loader: (({params})=>fetch('/Feature.json'))
      },{
        path:'/blog',
        element: <Blog></Blog>
      }
    ]
  },
  // {
  //       path: '/statistic',
  //       element: <Statistic></Statistic>
  //     },
  //     {
  //       path: '/job',
  //       element: <Job></Job>
  //     },
  //     {
  //       path:'/blog',
  //       element: <Blog></Blog>
  //     }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistic from './component/Statistic';
import Job from './component/Job';
import Blog from './component/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: 'statistic',
        element: <Statistic></Statistic>
      },
      {
        path: 'job',
        element: <Job></Job>
      },
      {
        path:'blog',
        element: <Blog></Blog>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

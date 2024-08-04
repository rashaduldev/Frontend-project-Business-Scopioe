import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import TherapistDetail from './Components/Card/TherapistDetail';
import data from '../public/dynamicdata.json';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
    loader:()=>data,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  {
    path: "/therapist/:therapistId",
    element: <TherapistDetail />,
    loader:()=>data,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

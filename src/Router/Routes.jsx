import {
    createBrowserRouter 
  } from "react-router-dom";
import MainLayout from "../Component/MainLayout/MainLayout";
  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    },
    
  ]);
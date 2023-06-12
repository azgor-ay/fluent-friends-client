import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Layouts/Main";
import Home from "./Pages/Home";
import Instructors from "./Pages/Instructors";
import Classes from "./Pages/Classes";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import Dashboard from "./Layouts/Dashboard";
import SelectedClasses from "./Pages/Dashboard/SelectedClasses";
import EnrolledClasses from "./Pages/Dashboard/EnrolledClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/selectedClasses",
        element: <SelectedClasses></SelectedClasses>
      }, 
      {
        path: "/dashboard/enrolledClasses",
        element: <EnrolledClasses></EnrolledClasses>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);

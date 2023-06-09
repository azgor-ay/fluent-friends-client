import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./Layouts/Main";
import Home from "./Pages/Home";
import Instructors from "./Pages/Instructors";
import Classes from "./Pages/Classes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [ 
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path : '/instructors',
        element: <Instructors></Instructors>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
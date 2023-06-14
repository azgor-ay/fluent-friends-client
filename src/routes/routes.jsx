import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Instructors from "../Pages/Instructors";
import Classes from "../Pages/Classes";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Layouts/Dashboard";
import SelectedClasses from "../Pages/Dashboard/SelectedClasses";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../Pages/Dashboard/ManageUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/instructors",
        element: <Instructors/>,
      },
      {
        path: "/classes",
        element: <Classes/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard/></PrivateRoute>,
    children: [
      {
        path: "/dashboard/selectedClasses",
        element: <SelectedClasses/>
      }, 
      {
        path: "/dashboard/enrolledClasses",
        element: <EnrolledClasses/>
      },
      {
        path: "/dashboard/manageUsers",
        element: <ManageUsers/>
      },
    ]
  },
]);


export default router; 
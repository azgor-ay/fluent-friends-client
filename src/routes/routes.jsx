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
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import Payment from "../Pages/Dashboard/Payment";
import InstructorOnly from "./InstructorsOnly";
import AddClass from "../Pages/Dashboard/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses";
import AdminOnly from "./AdminOnly";
import ManageClasses from "../Pages/Dashboard/ManageClasses";

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
        path: "/dashboard",
        element: <>
        <h1 className="page-heading">🌟 Welcome to <span className="text-primary">Fluent</span> Friend 🌟</h1>
        <p className="px-24 text-xl text-center text-accent">Unlock your language potential with personalized courses and interactive practice. Embark on an exciting journey to become a confident communicator.</p>
        </>
      },
      // Student Links
      {
        path: "/dashboard/selectedClasses",
        element: <PrivateRoute><SelectedClasses/></PrivateRoute>
      }, 
      {
        path: "/dashboard/enrolledClasses",
        element: <PrivateRoute><EnrolledClasses/></PrivateRoute>
      },
      {
        path: "/dashboard/payment",
        element: <PrivateRoute><Payment/></PrivateRoute>
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PrivateRoute><PaymentHistory/></PrivateRoute>
      },  

      // Instructors Links 
      {
        path: "/dashboard/addClass",
        element: <InstructorOnly><AddClass/></InstructorOnly>
      },
      {
        path: "/dashboard/myClasses",
        element: <InstructorOnly><MyClasses/></InstructorOnly>
      },

      // Admin Links
      {
        path: "/dashboard/manageUsers",
        element: <AdminOnly><ManageUsers/></AdminOnly>
      },
      {
        path: "/dashboard/manageClasses",
        element: <AdminOnly><ManageClasses/></AdminOnly>
      },
    ]
  },
]);


export default router; 
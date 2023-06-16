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
import DashboardWelcome from "../components/ShareAble/DashboardWelcome";
import StudentOnly from "./StudentOnly";

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
        element: <DashboardWelcome></DashboardWelcome>
      },
      // Student Links
      {
        path: "/dashboard/selectedClasses",
        element: <StudentOnly><SelectedClasses/></StudentOnly>
      }, 
      {
        path: "/dashboard/enrolledClasses",
        element: <StudentOnly><EnrolledClasses/></StudentOnly>
      },
      {
        path: "/dashboard/payment/:id",
        element: <StudentOnly><Payment/></StudentOnly>
      },
      {
        path: "/dashboard/paymentHistory",
        element: <StudentOnly><PaymentHistory/></StudentOnly>
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
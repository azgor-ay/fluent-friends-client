import { Helmet } from "react-helmet-async";
import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "../components/ShareAble/Logo";
import {
  FaChalkboardTeacher,
  FaHome,
  FaPlus,
  FaUserFriends,
  FaUserGraduate,
  FaUsersCog,
  FaWallet,
} from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { BsCollectionFill } from "react-icons/bs";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useStudent from "../hooks/useStudent";
const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();
  return (
    <div className="drawer lg:drawer-open">
      <Helmet>
        <title>Fluent Friends| Student Dashboard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-start">
        <div className="w-10/12">
          <Outlet></Outlet>
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="py-12 space-y-2">
            <div className="pb-12">
              <Logo></Logo>
            </div>

            {/* Students Dashboard */}
            {isStudent && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/selectedClasses"
                    className={({ isActive }) =>
                      isActive ? "ActiveDashNav" : "DashNav"
                    }
                  >
                    <BsFillBookmarkStarFill /> My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/enrolledClasses"
                    className={({ isActive }) =>
                      isActive ? "ActiveDashNav" : "DashNav"
                    }
                  >
                    <FaChalkboardTeacher /> My Enrolled Classes
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/paymentHistory"
                    className={({ isActive }) =>
                      isActive ? "ActiveDashNav" : "DashNav"
                    }
                  >
                    <FaWallet /> My Payment History
                  </NavLink>
                </li>
              </>
            )}


            {/* Instructors Links */}
            {isInstructor && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/addClass"
                    className={({ isActive }) =>
                      isActive ? "ActiveDashNav" : "DashNav"
                    }
                  >
                    <FaPlus /> Add new Class
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/myClasses"
                    className={({ isActive }) =>
                      isActive ? "ActiveDashNav" : "DashNav"
                    }
                  >
                    <BsCollectionFill /> My Classes
                  </NavLink>
                </li>
              </>
            )}
            {/* Instructors Links */}

            {/* Admin Links */}
            {isAdmin && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/manageUsers"
                    className={({ isActive }) =>
                      isActive ? "ActiveDashNav" : "DashNav"
                    }
                  >
                    <FaUsersCog />
                    Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageClasses"
                    className={({ isActive }) =>
                      isActive ? "ActiveDashNav" : "DashNav"
                    }
                  >
                    <SiGoogleclassroom />
                    Manage Classes
                  </NavLink>
                </li>
              </>
            )}

            {/* Admin Links */}
          </div>
          <hr />
          <br /> <br />
          <li className="DashNav">
            <Link to="/">
              {" "}
              <FaHome className="inline" /> Home
            </Link>
          </li>
          <li className="DashNav">
            <Link to="/classes">
              {" "}
              <FaUserFriends /> Classes
            </Link>
          </li>
          <li className="DashNav">
            <Link to="/instructors">
              {" "}
              <FaUserGraduate /> Instructors
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

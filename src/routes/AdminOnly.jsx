/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const AdminOnly = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin()
const location = useLocation()

  if(loading || isAdminLoading){
    return <div className="text-center pt-48">
        <span className="loading loading-dots loading-lg"></span>
    </div>
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default AdminOnly;

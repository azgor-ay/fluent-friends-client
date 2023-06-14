/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../hooks/useInstructor";

const InstructorOnly = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isInstructor, isInstructorLoading] = useInstructor()
const location = useLocation()

  if(loading || isInstructorLoading){
    return <div className="text-center pt-48">
        <span className="loading loading-dots loading-lg"></span>
    </div>
  }

  if (user && isInstructor) {
    return children;
  }

  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default InstructorOnly;

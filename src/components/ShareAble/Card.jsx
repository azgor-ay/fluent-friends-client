import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useAxiosSecure from "../../hooks/useAxiosSecure";

/* eslint-disable react/prop-types */
const Card = ({ data }) => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  console.log(isAdmin, isInstructor);

  const {
    _id,
    name,
    price,
    flag,
    img,
    instructor,
    available_seats,
    enrolled_students,
  } = data;
  console.log(available_seats);
  const navigate = useNavigate();
  const location = useLocation();
  const [axiosSecure] = useAxiosSecure()
  const { user } = useContext(AuthContext);
  const handleAddToLearningList = () => {
    if (user) {
      const selectedClass = {
        classId: _id,
        flag,
        img,
        name,
        instructor, 
        price,
        email: user.email,
      };
      axiosSecure.post("/selectedClasses", selectedClass)
        .then((data) => {
          if (data.data.insertedId) {
            toast.success("Added to Learning List || Check Dashboard");
          }
        });
    } else {
      Swal.fire({
        title: "Have to login",
        text: "To choose your desired class",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "black",
        cancelButtonColor: "gray",
        cancelButtonText: "Explore more",
        confirmButtonText: "Redirect to Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div
      className={`card w-96 text-black shadow-xl
    ${available_seats < 1 ? "bg-error" : "bg-white"}
    `}
    >
      <Toaster />
      <figure className="p-6">
        <img className="h-16 object-cover" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div
            title="Available Seats"
            className="badge badge-secondary text-xs"
          >
            {available_seats}
          </div>
        </h2>
        <div>
          <p>Instructor: {instructor}</p>
          <p>Price: ${price}</p>
          <p>Available Seats: {available_seats}</p>
          <p>Enrolled Students: {enrolled_students}</p>
        </div>
        <div className="card-actions justify-end"></div>

        {/*   */}
        <button
          disabled={
            available_seats < 1 || isAdmin || isInstructor ? true : false
          }
          onClick={handleAddToLearningList}
          className="btn"
        >
          Add to Learning List
        </button>
      </div>
    </div>
  );
};

export default Card;

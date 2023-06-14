import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ data }) => {
  console.log(data);
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
  const navigate = useNavigate();
  const location = useLocation();

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
        email: user.email
      };
      fetch("http://localhost:5000/selectedClasses", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
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
    <div className="card w-96 bg-white text-black shadow-xl">
      <Toaster/>  
      <figure className="p-6">
        <img className="h-16  object-cover" src={img} alt="Shoes" />
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
        <button onClick={handleAddToLearningList} className="btn">
          Add to Learning List
        </button>
      </div>
    </div>
  );
};

export default Card;

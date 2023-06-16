/* eslint-disable react/prop-types */
import { Toaster, toast } from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useSelectedClasses from "../../hooks/useSelectedClasses";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Table = () => {
  const [axiosSecure] = useAxiosSecure()
  const [selectedClass, refetch] = useSelectedClasses()
    const handleDelete = (id) =>{
        Swal.fire({
            title: "Remove from List?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "black",
            cancelButtonColor: "gray",
            cancelButtonText: "No",
            confirmButtonText: "Yes",
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/selectedClasses/${id}`)
              .then(res => {
                if(res.data.deletedCount > 0){
                    toast.success('Deleted Successfully')
                    refetch()
                }
              })
            }
          });
    }

  return (
    <div className="overflow-x-auto">
        <Toaster/>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
            # 
            </th>
            <th>Course/Class</th>
            <th>Instructor</th>
            <th>Price</th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selectedClass.map((c, index) => <tr key={index}>
            <th>
              {index + 1 }
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={c.flag?c.flag:c.img}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{c.name}</div>
                </div>
              </div>
            </td>
            <td>
              {c.instructor}
            </td>
            <td className="text-right">${c.price}</td>
            <th>
              <Link to={`/dashboard/payment/${c._id}`}>
              <button className="btn btn-xs"> Enroll Now</button>
              </Link> 
              <span className="px-4">- or -</span>
              <button onClick={()=>handleDelete(c._id)} className="btn btn-error btn-xs"> <FaTrash/> Delete</button>
            </th>
          </tr>)}
        </tbody>
      </table>
      {selectedClass.length === 0 && 
        <div className="text-center">
          <h1 className="page-heading">Empty Selected Classes</h1>
          <Link to="/classes"><button className="btn btn-primary">Explore Classes</button></Link>
          </div>}
    </div>
  );
};

export default Table;

import { FaTrash } from "react-icons/fa";
import useInstructorsAddedClasses from "../../hooks/useInstructorsAddedClasses";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Toaster, toast } from "react-hot-toast";

const MyClasses = () => {
  const [myAddedClasses, refetch] = useInstructorsAddedClasses();
  const [axiosSecure] = useAxiosSecure()
  console.log(myAddedClasses);
  const handleDelete = (id) =>{
    axiosSecure.delete(`/classes/${id}`)
    .then(res=> {
        if(res.data.deletedCount){
            toast.success('Deleted Successfully')
            refetch()
        }
    })
  }

  return (
    <div>
        <Toaster/>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Class/Course</th>
            <th>Student Capacity</th>
            <th>Total Enrolled</th>
            <th>Class/Course Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myAddedClasses.map((course, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>
                <div className="flex justify-start items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={course.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{course.name}</div>
                    <div className="text-sm opacity-50">
                      Price:${course.price}
                    </div>
                  </div>
                </div>
              </td>
              <td>{course.available_seats}</td>
              <th>{course.enrolled_students}</th>
              <th className="uppercase">{course.status}</th>
              <th>
                <button 
                onClick={()=>handleDelete(course._id)}
                className="btn btn-error btn-sm"><FaTrash/></button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;

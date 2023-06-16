import { Toaster, toast } from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  const handleMakeDenied = (id) => {
    axiosSecure.patch(`/classes/denied/${id}`).then((res) => {
      refetch();
      if (res.data.modifiedCount) {
        toast.success("Class Denied Successfully");
      }
    });
  };

  const handleMakeSuspend = (id) => {
    axiosSecure.patch(`/classes/pending/${id}`).then((res) => {
      refetch();
      if (res.data.modifiedCount) {
        toast.success("Class Suspended Successfully");
      }
    });
  };

  const handleMakeApproved = (id) => {
    axiosSecure.patch(`/classes/approved/${id}`).then((res) => {
      refetch();
      if (res.data.modifiedCount) {
        toast.success("Class Approved Successfully");
      }
    });
  };
  
  return (
    <div>
      <Toaster />
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Class/Course</th>
            <th>Price</th>
            <th>
              Enrolled <br /> Students
            </th>
            <th>Current Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((c, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>
                <div className="flex justify-start items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12 bg-white">
                      <img src={c.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{c.name}</div>
                    <div className="text-sm opacity-50">By {c.instructor}</div>
                  </div>
                </div>
              </td>
              <td className="text-right">${c.price}</td>
              <td className="text-right">{c.enrolled_students}</td>
              <td
                className={`uppercase 
                ${c.status === "pending" && "text-error"}
                ${c.status === "denied" && "text-accent"}
                ${c.status === "approved" && "text-success font-extrabold"}`}
              >
                {c.status}
              </td>
              <th>
                <button
                  onClick={() => handleMakeDenied(c._id)}
                  className="btn btn-accent mx-1 btn-xs"
                >
                  Deny
                </button>
                <button
                  onClick={() => handleMakeSuspend(c._id)}
                  className="btn btn-accent mx-1 btn-xs"
                >
                  Suspend
                </button>
                <button
                  onClick={() => handleMakeApproved(c._id)}
                  className="btn btn-accent mx-1 btn-xs"
                >
                  Approve
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;

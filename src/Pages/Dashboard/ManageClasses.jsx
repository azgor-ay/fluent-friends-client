import { Toaster, toast } from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

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

  const handleSendFeedBack = async (id) => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Send your feedback to the instructor who created this class",
      inputPlaceholder: "Type your feedback here...",
      inputAttributes: {
        "aria-label": "Type your feedback here",
      },
      showCancelButton: true,
      confirmButtonColor: "black",
      confirmButtonText: `🚀Send`,
      cancelButtonText: "Cancel",
    });

    if (text) {
      axiosSecure
        .patch(`/classes/feedback/${id}`, { feedback: text })
        .then((res) => {
          refetch();
          if (res.data.modifiedCount) {
            Swal.fire({
              text: text,
              timer: 1500,
              showConfirmButton: false,
            });
            toast.success("Feedback Sended Successfully");
          }
        });
    }
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
                ${c.status === "pending" && "text-accent"}
                ${c.status === "denied" && "text-error"}
                ${c.status === "approved" && "text-success font-extrabold"}`}
              >
                {c.status}
              </td>
              <th>
                <button
                  onClick={() => handleMakeApproved(c._id)}
                  className="btn btn-accent mx-1 btn-xs"
                  disabled={c.status === 'approved' || 
                  c.status === "denied" ? true : false}
                >
                  Approve
                </button>
                <button
                  onClick={() => handleMakeDenied(c._id)}
                  className="btn btn-accent mx-1 btn-xs"
                  disabled={c.status === 'approved' || 
                  c.status === "denied" ? true : false}
                >
                  Deny
                </button>
                <button
                  onClick={() => handleSendFeedBack(c._id)}
                  className="btn btn-accent mx-1 btn-xs"
                >
                  Feedback
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

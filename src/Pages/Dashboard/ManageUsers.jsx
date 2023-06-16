import { useQuery } from "@tanstack/react-query";
import { Toaster, toast } from "react-hot-toast";
import { FaUser, FaUserGraduate, FaUserShield } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeStudent = (id) => {
    axiosSecure.patch(`/users/student/${id}`).then((res) => {
      refetch();
      if (res.data.modifiedCount) {
        toast.success("Student or a Learner");
      }
    });
  };

  const handleMakeInstructor = (id) => {
    axiosSecure.patch(`/users/instructor/${id}`).then((res) => {
      refetch();
      if (res.data.modifiedCount) {
        toast.success("Instructor or a Teacher");
      }
    });
  };

  const handleMakeAdmin = (id) => {
    axiosSecure.patch(`/users/admin/${id}`).then((res) => {
      refetch();
      if (res.data.modifiedCount) {
        toast.success("Admin Powered");
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <Toaster />
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Person</th>
              <th>Role</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex justify-start items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.profilePhoto}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user.instructor}
                  <br />

                  <div className="flex justify-center items-center text-xs uppercase bg-base-300 p-2 rounded-xl">
                    {user.role === "admin" && (
                      <FaUserShield className="text-2xl mr-2 opacity-100" />
                    )}
                    {user.role === "student" && (
                      <FaUser className="text-2xl mr-2 opacity-20" />
                    )}
                    {user.role === "instructor" && (
                      <FaUserGraduate className="text-2xl mr-2 opacity-50" />
                    )}

                    <span>{user.role}</span>
                  </div>
                </td>
                <th>
                  <button
                    onClick={() => handleMakeStudent(user._id)}
                    className="btn btn-accent mx-1 btn-xs"
                  >
                    Student
                  </button>
                  <button
                    onClick={() => handleMakeInstructor(user._id)}
                    className="btn btn-accent mx-1 btn-xs"
                  >
                    Instructor
                  </button>
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn btn-accent mx-1 btn-xs"
                  >
                    Admin
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;

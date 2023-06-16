import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const usePaymentsOrEnrolled = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: enrolledOrPayments = [] } = useQuery({
    queryKey: ["enrolledOrPayments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/enrolledOrPayments?email=${user?.email}`);
      return res.data;
    },
  });
  return [enrolledOrPayments, refetch];
};

export default usePaymentsOrEnrolled;

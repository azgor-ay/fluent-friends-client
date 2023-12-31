import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";   
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure()
  const { refetch, data: selectedClass = [] } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`selectedClasses?email=${user?.email}`);
      return res.data;
    },
  });
  return [selectedClass, refetch];
};

export default useSelectedClasses;

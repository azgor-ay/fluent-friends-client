import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";   
import useAxiosSecure from "./useAxiosSecure";

const useInstructorsAddedClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure()
  const { refetch, data: myAddedClasses = [] } = useQuery({
    queryKey: ["myAddedClasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`classes?email=${user?.email}`);
      console.log('res from axios', res);
      return res.data;
    },
  });
  console.log(myAddedClasses);
  return [myAddedClasses, refetch];
};

export default useInstructorsAddedClasses;

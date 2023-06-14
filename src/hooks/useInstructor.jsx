import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`users/instructor/${user?.email}`)
            console.log('is instructor res', res);
            return res.data.instructor   
        }
    })
    return [isInstructor, isInstructorLoading]; 
};

export default useInstructor;
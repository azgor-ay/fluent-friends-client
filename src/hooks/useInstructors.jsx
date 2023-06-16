import { useEffect, useState } from "react";

const useInstructors = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fluent-friends-server.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return data;
};

export default useInstructors;

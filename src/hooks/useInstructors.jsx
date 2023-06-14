import { useEffect, useState } from "react";

const useInstructors = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return data;
};

export default useInstructors;

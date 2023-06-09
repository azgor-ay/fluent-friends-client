import { useEffect, useState } from "react";

const useInstructors = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./teacher.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return data;
};

export default useInstructors;

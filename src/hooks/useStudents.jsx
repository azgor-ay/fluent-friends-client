import { useEffect, useState } from "react";

const useStudents = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return data;
};

export default useStudents;

import { useEffect, useState } from "react";

const useStudents = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fluent-friends-server.vercel.app/students")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return data;
};

export default useStudents;

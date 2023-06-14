import { useEffect, useState } from "react";

const useClasses = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return data;
};

export default useClasses;

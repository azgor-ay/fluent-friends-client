import { useEffect, useState } from "react";

const useClasses = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./class.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return data;
};

export default useClasses;

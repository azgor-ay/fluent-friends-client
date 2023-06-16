import { useEffect, useState } from "react";

const useClasses = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fluent-friends-server.vercel.app/classes/approved")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return data;
};

export default useClasses;

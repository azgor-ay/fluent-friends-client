import { Outlet } from "react-router-dom";
import NavBar from "../components/ShareAble/NavBar";
import Footer from "../components/ShareAble/Footer";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Main = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div className="container mx-auto">
      <NavBar></NavBar>
      {loading ? (
        <div className="text-center pt-48">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <Outlet></Outlet>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Main;

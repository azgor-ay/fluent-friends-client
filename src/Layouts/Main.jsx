import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/ShareAble/NavBar";
import Footer from "../components/ShareAble/Footer";

const Main = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <div className="text-center pt-48">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="container mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

import { Link } from "react-router-dom";
import img from "../assets/404-page-not-found.json";
import Lottie from "lottie-react";
const ErrorPage = () => {
  return (
    <div className="w-full absolute">
      <h1 className="uppercase text-center font-extrabold text-5xl relative top-24">
        seems like you are lost
      </h1>
      <div className="relative -top-12 w-1/2 mx-auto">
        <Lottie animationData={img} />
      </div>
      <div className="relative -top-52 text-center">
        <Link to="/" className="btn btn-primary rounded-3xl">Back to Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;

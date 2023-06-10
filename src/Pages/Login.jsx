/* eslint-disable react/no-unescaped-entities */
import world from "../assets/world.json";
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col justify-between items-center lg:flex-row-reverse">
        <div className="text-center lg:text-left w-full">
          <Lottie animationData={world} />
        </div>
        <div className="card flex-shrink-0 mr-48 shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center my-5">Login now!</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-center">
              Don't have an account?{" "}
              <Link className="link" to="/register">
                Register
              </Link>
            </p>
            <div className="divider"> or </div>
            <button className="text-xl btn btn-outline hover:scale-110 duration-500 hover:shadow-2xl">
              {" "}
              <FcGoogle className="inline" /> Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

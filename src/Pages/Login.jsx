/* eslint-disable react/no-unescaped-entities */
import world from "../assets/world.json";
import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../components/ShareAble/SocialLogin";
import { Toaster, toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [showPass, setPassShow] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        toast.success("Logged in Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-100">
      <Helmet>
        <title>Fluent Friends | Login Now!</title>
      </Helmet>
      <Toaster />
      <div className="hero-content flex-col justify-between items-center lg:flex-row-reverse">
        <div className="text-center lg:text-left w-full">
          <Lottie animationData={world} />
        </div>
        <div className="card flex-shrink-0 mr-48 shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center my-5">Login now!</h1>

            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPass? "text": 'password'}
                  placeholder="password"
                  name="password"
                  className="input input-bordered pr-12"
                />
                <span
                  onClick={() => setPassShow(!showPass)}
                  className="relative left-64 ml-4 bottom-9 cursor-pointer w-5"
                >
                  {showPass ? (
                    <FaEye className="inline" />
                  ) : (
                    <FaEyeSlash className="inline" />
                  )}
                </span>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="LOGIN"
                />
              </div>
            </form>

            <p className="text-center">
              Don't have an account?{" "}
              <Link className="link" to="/register">
                Register
              </Link>
            </p>
            <div className="divider"> or </div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

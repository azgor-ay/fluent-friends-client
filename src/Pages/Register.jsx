/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import world from "../assets/world.json";
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);


  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col justify-between items-center lg:flex-row">
        <div className="text-center lg:text-left w-full">
          <Lottie animationData={world} />
        </div>
        <div className="card flex-shrink-0 mr-48 shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center my-5">
              Register now!
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  {...register("email")}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upload Profile Picture</span>
                </label>
                <input 
                type="file" 
                className="file-input w-full max-w-xs file-input-bordered file-input-primary" 
                 {...register("profile")}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email")}
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
                  {...register("password", { required: true })}
                />
                {errors.exampleRequired && <span>This field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Re-Type Password"
                  className="input input-bordered"
                  {...register("con-password", { required: true })}
                />
                {errors.exampleRequired && <span>This field is required</span>}
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary"
                />
              </div>
            </form>

            <p className="text-center">
              Already have an account?{" "}
              <Link className="link" to="/login">
                Login
              </Link>
            </p>
            <div className="divider"> or </div>
            <button className="text-xl btn btn-outline hover:scale-110 duration-500 hover:shadow-2xl">
              {" "}
              <FcGoogle className="inline" /> Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

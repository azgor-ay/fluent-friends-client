/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SocialLogin from "../components/ShareAble/SocialLogin";
import { Toaster, toast } from "react-hot-toast";
const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (data?.password !== data?.conPassword) {
      toast.error('Password is not matched!')
      console.log('not matched');
    } else {
      registerUser(data.email, data.password)
        // eslint-disable-next-line no-unused-vars
        .then((result) => {
          toast.success('User created successfully!')
        })
        .catch((error) => {
          toast.error(error.message)
          console.log(error.message)
        });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-100">
      <Helmet>
        <title>Fluent Friends | Register Now!</title>
      </Helmet>
      <Toaster/>
      <div className="hero-content">
        <div className="card shadow-2xl">
          <div className="card-body w-full">
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
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-error">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upload Profile Picture</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-sm w-full max-w-xs file-input-bordered file-input-primary"
                  {...register("profile", { required: true })}
                />
                {errors.profile && (
                  <span className="text-error">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-error">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { 
                    required: true, 
                    pattern:  /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{6,}/  })}
                />
                {errors.password && (
                  <span className="text-error">This field is required</span>
                )}
                {errors?.password?.type === 'pattern' && (
                  <span className="text-error">Total 6 character include 1 Uppercase, 1 Number & 1 Special character like (-,&%*)</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Re-Type Password"
                  className="input input-bordered"
                  {...register("conPassword", { required: true })}
                />
                {errors.password && (
                  <span className="text-error">This field is required</span>
                )}
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
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SocialLogin from "../components/ShareAble/SocialLogin";
import { Toaster, toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Register = () => {
  const { registerUser, updateUserProfile } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [showConPass, setShowConPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const image_hosting_token = import.meta.env.VITE_IMG_UPLOAD_TOKEN;
  const image_hosted_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data?.password !== data?.conPassword) {
      toast.error("Password did'nt matched!");
    } else {
      const formData = new FormData();
      formData.append("image", data.profilePhoto[0]);

      fetch(image_hosted_url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgResponse) => {
          if (imgResponse.success) {
            const profilePhoto = imgResponse.data.display_url;
            registerUser(data.email, data.password)
              // eslint-disable-next-line no-unused-vars
              .then(() => {
                toast.success("User created successfully!");
                updateUserProfile(data.name, profilePhoto)
                  .then(() => {
                    console.log("user profile info updated");
                    const savedUser = {
                      name: data.name,
                      email: data.email,
                      profilePhoto: profilePhoto,
                      role: "student",
                    };

                    fetch("http://localhost:5000/users", {
                      method: "POST",
                      headers: {
                        "content-type": "application/json",
                      },
                      body: JSON.stringify(savedUser),
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        if (data.insertedId) {
                          toast.success("Welcome to Fluent Friends territory");
                          navigate(from, { replace: true });
                        }
                      });
                  })
                  .catch((error) => console.log(error.message));
              })
              .catch((error) => {
                toast.error(error.message);
                console.log(error.message);
              });
          }
        });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-100">
      <Helmet>
        <title>Fluent Friends | Register Now!</title>
      </Helmet>
      <Toaster />
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
                  {...register("profilePhoto", { required: true })}
                />
                {errors.profilePhoto && (
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
                  type={showPass ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    // eslint-disable-next-line no-useless-escape
                    pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{6,}/,
                  })}
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="relative left-64 ml-8 bottom-9 cursor-pointer w-5"
                >
                  {showPass ? (
                    <FaEye className="inline" />
                  ) : (
                    <FaEyeSlash className="inline" />
                  )}
                </span>
                {errors.password && (
                  <span className="text-error">This field is required</span>
                )}
                {errors?.password?.type === "pattern" && (
                  <span className="text-error">
                    Total 6 character include 1 Uppercase, 1 Number & 1 Special
                    character like (-,&%*)
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type={showConPass ? "text" : "password"}
                  placeholder="Re-Type Password"
                  className="input input-bordered"
                  {...register("conPassword", { required: true })}
                />
                <span
                  onClick={() => setShowConPass(!showConPass)}
                  className="relative left-64 ml-8 bottom-9 cursor-pointer w-5"
                >
                  {showConPass ? (
                    <FaEye className="inline" />
                  ) : (
                    <FaEyeSlash className="inline" />
                  )}
                </span>
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

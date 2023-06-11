import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleLogin = () =>{
      signInWithGoogle()
    .then((result) => {
      console.log(result.user);
      navigate("/");
    })
    .catch((error) => console.log(error.message));
  }

  return (
    <button
      onClick={handleGoogleLogin}
      className="text-xl btn btn-outline hover:scale-110 duration-500 hover:shadow-2xl">
      {" "}
      <FcGoogle className="inline" /> Continue with Google
    </button>
  );
};

export default SocialLogin;

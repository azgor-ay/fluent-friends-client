import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <span  className="font-bold text-4xl"> <span className="text-primary">Fluent</span> Friends</span>
    </Link>
  );
};

export default Logo;

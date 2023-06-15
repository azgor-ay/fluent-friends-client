/* eslint-disable react/prop-types */

import { FaUserGraduate } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const InstructorAnimeCard = ({ slide }) => {
  const { profilePhoto, name, email, role } = slide;
  return (
    <div className={`hero group cursor-pointer`}>
      <img className="w-full h-72 object-cover" src={profilePhoto} alt="" />
      <div className="hero-overlay bg-opacity-60 group-hover:bg-opacity-95 duration-500"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold translate-y-32 group-hover:-translate-y-2 duration-500">
            {name}
          </h1>
          <div className="opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 duration-1000">
            <div className="badge badge-primary badge-outline">
              <span>Email:- </span>{" "}
              <span className="font-extrabold"> {email}</span>
            </div>{" "}
            <div>
            <h1 className="text-2xl uppercase flex items-center justify-center mt-6">
              <FaUserGraduate className="inline mx-1"/> 
              <span className="text-3xl font-extralight">{role}</span></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorAnimeCard;

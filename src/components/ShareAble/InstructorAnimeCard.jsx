// eslint-disable-next-line react/prop-types
const InstructorAnimeCard = ({ slide }) => {
  const { img, name, email, classes_number } = slide;
  return (
    <div className={`hero group cursor-pointer`}>
      <img src={img} alt="" />
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
            <p className="text-3xl font-extrabold mt-6">Classes: {classes_number}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorAnimeCard;

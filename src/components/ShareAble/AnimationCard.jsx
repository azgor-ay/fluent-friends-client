// eslint-disable-next-line react/prop-types
const AnimationCard = ({ slide }) => {
  const { flag, name, instructor, available_seats, enrolled_students, price } = slide;
  return (
    <div className={`hero group cursor-pointer`}>
      <img src={flag} alt="" />
      <div className="hero-overlay bg-opacity-60 group-hover:bg-opacity-95 duration-500"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold group-hover:-translate-y-2 duration-1000">
            {name}
          </h1>
          <div className="opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 duration-1000">
            <p className="text-2xl font-semibold">Instructor: {instructor}</p>
            <div className="badge badge-primary badge-outline">
              <span>Available Seat:- </span>{" "}
              <span className="font-extrabold"> {available_seats}</span>
            </div>{" "}
            <div className="badge badge-primary badge-outline">
              <span>Already Enrolled:- </span>{" "}
              <span className="font-extrabold"> {enrolled_students}</span>
            </div>
            <p className="text-3xl font-extrabold mt-6">Price: $ {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationCard;

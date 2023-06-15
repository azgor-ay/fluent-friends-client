/* eslint-disable react/prop-types */

const BannerCard = ({ slide }) => {
  const {
    name,
    flag,
    img,
    price,
    available_seats,
    enrolled_students,
    instructor,
  } = slide;
  return (
    <div
      className="hero min-h-screen lg:rounded-3xl bg-base-200"
      style={{
        backgroundImage: `url(https://i.ibb.co/M5nN8Dr/bg.png)`,
      }}
    >
      <div className="hero-overlay bg-opacity-50 rounded-3xl"></div>
      <div className="hero-content text-neutral-content lg:p-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center text-center lg:text-right">
          <div className="flex flex-col justify-center items-center gap-5">
            <img src={flag ? flag : img} className="w-96 object-cover" />
            <h1 className="text-3xl lg:text-4xl font-semibold">{name}</h1>
          </div>

          <div>
            <p className="text-4xl my-2 lg:text-5xl font-extrabold">$ {price}</p>
            <p className="lg:text-2xl">Available Seats: {available_seats}</p>
            <p className="lg:text-2xl">Enrolled Students: {enrolled_students}</p>
            <p className="text-2xl lg:text-2xl font-semibold my-5">
              Instructor : {instructor}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;

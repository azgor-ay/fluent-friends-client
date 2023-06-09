/* eslint-disable react/prop-types */

const BannerCard = ({ slide }) => {
  console.log(slide);
  const { name, flag, price, available_seats, enrolled_students, instructor } = slide;
  return (
    <div
      className="hero min-h-fit bg-fixed rounded-3xl"
      style={{
        backgroundImage: `url(https://i.ibb.co/M5nN8Dr/bg.png)`,
      }}
    >
      <div className="hero-overlay bg-opacity-50 rounded-3xl"></div>
      <div className="hero-content text-neutral-content p-24">
        <div className="grid grid-cols-2 gap-12 items-center text-right">
          <div className="flex flex-col justify-center items-center gap-5">
            <img src={flag} className="w-96" />
            <h1 className="text-4xl font-semibold">{name}</h1>
          </div>

          <div>
            <p className="text-5xl font-extrabold">$ {price}</p>
            <p className="text-2xl">Available Seats: {available_seats}</p>
            <p className="text-2xl">Enrolled Students: {enrolled_students}</p>
            <p className="text-2xl font-semibold my-5">Instructor : {instructor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;

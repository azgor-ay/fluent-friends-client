const Card = ({ data }) => {
  return (
    <div className="card w-96 bg-white text-black shadow-xl">
      <figure className="p-6">
        <img className="h-16  object-cover" src={data.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {data.name}
          <div className="badge badge-secondary">Available{}</div>
        </h2>
        <div>
        <p>Instructor: {data.instructor}</p>
        <p>Price: ${data.price}</p>
        <p>Available Seats: {data.available_seats}</p>
        <p>Enrolled Students: {data.enrolled_students}</p>
        
        </div>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default Card;

const Card2 = ({ data }) => {
  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      <figure>
        <img src={data.img} alt="instructor" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {data.name}
          <div className="badge badge-secondary">Available{}</div>
        </h2>
        <div>
          <p>Email: {data.email}</p>
          <p>Age: {data.age}</p>
          <p>Classes: {data.classes_number}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Card2;

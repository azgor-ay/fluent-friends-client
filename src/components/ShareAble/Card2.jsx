/* eslint-disable react/prop-types */
import {FaUserGraduate} from 'react-icons/fa'
const Card2 = ({ data }) => {
  const {profilePhoto, name, email, role} = data
  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      <figure>
        <img className='w-full h-60 object-cover object-center' src={profilePhoto} alt="instructor" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary uppercase"> <FaUserGraduate className='inline mr-1'/> {role}</div>
        </h2>
        <div>
          <p>Email: {email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;

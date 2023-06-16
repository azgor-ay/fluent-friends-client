import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
const ApplyCard = () => {
  return (
    <Tilt>
        <div className="bg-[url('https://i.ibb.co/M5nN8Dr/bg.png')] p-12 lg:mt-28 flex justify-between items-center lg:px-32 text-white">
      <div className="space-y-4">
        <h1 className="text-3xl lg:text-6xl font-extrabold">Start Learning</h1>
        <p className='sm:text-xs'>With your friends explore awesome curriculum to visit the whole world</p>
      </div>
      <Link to="/classes"><button className="btn btn-primary">Enroll Now</button></Link>
    </div>
    </Tilt>
  );
};

export default ApplyCard;

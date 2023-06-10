import Tilt from 'react-parallax-tilt';
const ApplyCard = () => {
  return (
    <Tilt>
        <div className="bg-[url('https://i.ibb.co/M5nN8Dr/bg.png')] p-12 mt-28 flex justify-between items-center px-32 text-white">
      <div className="space-y-4">
        <h1 className="text-6xl font-extrabold">Start Learning</h1>
        <p>With your friends explore awesome curriculum to visit the whole world</p>
      </div>
      <button className="btn btn-primary">Apply Now</button>
    </div>
    </Tilt>
  );
};

export default ApplyCard;

import { useState } from "react";
import CountUp from "react-countup";
import { FaUserFriends, FaUserGraduate } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import ScrollTrigger from "react-scroll-trigger";
import useInstructor from "../../hooks/useInstructor";
import useClasses from "../../hooks/useClasses";

const CountDown = () => {
  const [countOn, setCountOn] = useState(false);
//   const teacher = useInstructor()
//   const student = 
//   const classes = useClasses()
  return (
    <ScrollTrigger
      onEnter={() => setCountOn(true)}
      onExit={() => setCountOn(false)}
    >
      <div className="bg-black text-white p-12 mt-12">
        {countOn && (
          <div className="flex justify-evenly items-center">
            <div className="text-center">
              <h1 className="text-2xl">
                <CountUp start={0} end={1000} duration={2} delay={0} />
              </h1>
              <span>
                <FaUserGraduate className="inline text-3xl" /> <br />
                Teachers
              </span>
            </div>
            <div className="text-center">
              <h1 className="text-2xl">
                <CountUp start={0} end={1000} duration={2} delay={0} />
              </h1>
              <span>
                <FaUserFriends className="inline text-3xl" /> <br />
                Students
              </span>
            </div>
            <div className="text-center">
              <h1 className="text-2xl">
                <CountUp start={0} end={1000} duration={2} delay={0} />
              </h1>
              <span>
                <SiGoogleclassroom className="inline text-3xl" /> <br />
                Classes
              </span>
            </div>
          </div>
        )}
      </div>
    </ScrollTrigger>
  );
};

export default CountDown;

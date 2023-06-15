import { useState } from "react";
import CountUp from "react-countup";
import { FaUserFriends, FaUserGraduate } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import ScrollTrigger from "react-scroll-trigger";
import useClasses from "../../hooks/useClasses";
import useInstructors from "../../hooks/useInstructors";
import useStudents from "../../hooks/useStudents";

const CountDown = () => {
  const [countOn, setCountOn] = useState(false);
  const teachers = useInstructors()
  const students = useStudents()
  const classes = useClasses()

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
                <CountUp start={0} end={teachers?.length} duration={2} delay={0} />
              </h1>
              <span>
                <FaUserGraduate className="inline text-3xl" /> <br />
                Teachers
              </span>
            </div>
            <div className="text-center">
              <h1 className="text-2xl">
                <CountUp start={0} end={students?.length} duration={2} delay={0} />
              </h1>
              <span>
                <FaUserFriends className="inline text-3xl" /> <br />
                Students
              </span>
            </div>
            <div className="text-center">
              <h1 className="text-2xl">
                <CountUp start={0} end={classes?.length} duration={2} delay={0} />
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

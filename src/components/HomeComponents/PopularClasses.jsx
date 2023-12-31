import useClasses from "../../hooks/useClasses";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import AnimationCard from "../ShareAble/AnimationCard";

const PopularClasses = () => {
  const data = useClasses();
  const popularClasses = data.filter(d => d.enrolled_students > 5)
   
  const [text] = useTypewriter({
    words: ["Popular Classes", "Best instructor's Classes"],
    loop: Infinity,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  
  return (
    <div>
      <h1 className="page-heading">
        Explore our <span className="text-primary">{text}</span>{" "}
        <Cursor cursorColor="primary" />
      </h1>
      <div className="grid lg:grid-cols-3 gap-12 justify-center p-6">
        {popularClasses.map((slide, index) => (
          <AnimationCard key={index} slide={slide}></AnimationCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;

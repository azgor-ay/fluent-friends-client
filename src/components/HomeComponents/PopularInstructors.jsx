import { useTypewriter, Cursor } from "react-simple-typewriter";
import useInstructors from "../../hooks/useInstructors";
import InstructorAnimeCard from "../ShareAble/InstructorAnimeCard";

const PopularInstructors = () => {
  const data = useInstructors()
  const instructors = data.slice(0, 6)
  const [text] = useTypewriter({
    words: ["Popular Instructors", "Best instructor's"],
    loop: Infinity,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <div>
      <h1 className="page-heading">
        Explore our <span className="text-primary">{text}</span>{" "}
        <Cursor cursorColor="primary" />
      </h1>
      <div className="grid grid-cols-3 gap-12 justify-center">
        {instructors.map((slide, index) => (
            <InstructorAnimeCard key={index} slide={slide}></InstructorAnimeCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;

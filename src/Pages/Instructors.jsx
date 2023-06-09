import Card2 from "../components/ShareAble/Card2";
import useInstructors from "../hooks/useInstructors";

const Instructors = () => {
  const data = useInstructors()
  return (
    <div>
      <h1 className="page-heading">
        our <span className="text-primary">Instructors</span>
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {data.map((d) => (
          <Card2 key={d.name} data={d}></Card2>
        ))}
      </div>
    </div>
  );
};

export default Instructors;

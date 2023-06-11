import ApplyCard from "../components/HomeComponents/ApplyCard";
import HomeSlider from "../components/HomeComponents/HomeSlider";
import PopularClasses from "../components/HomeComponents/PopularClasses";
import UpcomingCourse from "../components/HomeComponents/UpcomingCourse";

const Home = () => {
  return (
    <div>
      <HomeSlider></HomeSlider>
      <PopularClasses></PopularClasses>
      <ApplyCard></ApplyCard>
      <UpcomingCourse></UpcomingCourse>

      {/* TODO */}
      https://www.youtube.com/watch?v=NWyWoW61B3I
      
    </div>
  );
};

export default Home;

import { Helmet } from "react-helmet-async";
import ApplyCard from "../components/HomeComponents/ApplyCard";
import HomeSlider from "../components/HomeComponents/HomeSlider";
import PopularClasses from "../components/HomeComponents/PopularClasses";
import UpcomingCourse from "../components/HomeComponents/UpcomingCourse";
import PopularInstructors from "../components/HomeComponents/PopularInstructors";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>
        Fluent Friends| Home
        </title>
      </Helmet>
      <HomeSlider></HomeSlider>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <ApplyCard></ApplyCard>
      <UpcomingCourse></UpcomingCourse>

      {/* TODO */}
      https://www.youtube.com/watch?v=NWyWoW61B3I
      
    </div>
  );
};

export default Home;

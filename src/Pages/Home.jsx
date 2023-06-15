import { Helmet } from "react-helmet-async";
import ApplyCard from "../components/HomeComponents/ApplyCard";
import HomeSlider from "../components/HomeComponents/HomeSlider";
import PopularClasses from "../components/HomeComponents/PopularClasses";
import UpcomingCourse from "../components/HomeComponents/UpcomingCourse";
import PopularInstructors from "../components/HomeComponents/PopularInstructors";
import CountDown from "../components/HomeComponents/CountDown";

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
      <CountDown></CountDown>    
      <UpcomingCourse></UpcomingCourse>
    </div>
  );
};

export default Home;

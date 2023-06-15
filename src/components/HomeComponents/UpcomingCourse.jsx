import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import "../../styles/style.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const UpcomingCourse = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/europe")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const [text] = useTypewriter({
    words: ["Courses", "Courses for your next tour"],
    loop: Infinity,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div className="p-12 hidden lg:block">
    <h1 className="page-heading">Our upcoming <span className="text-primary">{text}</span>  <Cursor cursorColor="primary" /></h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((d, index) => (
          <SwiperSlide key={index} className="text-center">
            <img className="" src={d.flags.png} />
            <h2 className="text-base-content font-semibold text-sm lg:text-2xl">{`${d.name.common}'s local language`}</h2>
            <h4 className="text-base-content font-extralight text-xs lg:text-2xl">{d.continents}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UpcomingCourse;

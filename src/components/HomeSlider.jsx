// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import useClasses from "../hooks/useClasses";
import BannerCard from "./ShareAble/BannerCard";

// import bg from "../assets/banner/bg.png";

const HomeSlider = () => {
  const classes = useClasses();
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {classes.map((slide) => (
          <SwiperSlide key={slide.name}>
            <BannerCard slide={slide}></BannerCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;

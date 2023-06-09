// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import bg from "../assets/banner/bg.png";
import BannerCard from "./ShareAble/BannerCard";

const HomeSlider = () => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <BannerCard></BannerCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;

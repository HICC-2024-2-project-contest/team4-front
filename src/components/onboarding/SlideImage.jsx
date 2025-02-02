import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../../styles/onboarding/SlideImage.css";

const SlideImage = () => {
  return(
    <div className="Swiper">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
        >
          <SwiperSlide><div className="swiper-slide">이미지 1</div></SwiperSlide>
          <SwiperSlide><div className="swiper-slide">이미지 2</div></SwiperSlide>
          <SwiperSlide><div className="swiper-slide">이미지 3</div></SwiperSlide>
        </Swiper>
      </div>
  );
}

export default SlideImage;

//SlideImage.jsx
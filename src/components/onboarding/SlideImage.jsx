import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../../styles/onboarding/SlideImage.css";
import Onboarding1 from "../../assets/images/Onboarding1.svg";
import Onboarding2 from "../../assets/images/Onboarding2.svg";

const SlideImage = () => {
  return (
    <div className="Swiper">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img src={Onboarding1} alt="온보딩1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Onboarding2} alt="온보딩2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideImage;

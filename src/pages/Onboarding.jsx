import "../styles/onboarding/Onboarding.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Header from "../components/common/Header";

const Onboarding = () => {
  const navigate = useNavigate();
  return (
    <div className="PageContainer">
      <Header />
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

      <Button text="시작하기" type="black" onClick={() => { console.log("✅ 시작하기 버튼 클릭됨!"); navigate("/questionnaire");}} />
    </div>
  );
};

export default Onboarding;

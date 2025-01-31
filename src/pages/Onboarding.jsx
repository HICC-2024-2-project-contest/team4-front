import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

const Onboarding = () => {
  const navigate = useNavigate();
  return (
    <div className="PageContainer">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
      >
        <SwiperSlide><div className="swiper-slide">이미지 1</div></SwiperSlide>
        <SwiperSlide><div className="swiper-slide">이미지 2</div></SwiperSlide>
        <SwiperSlide><div className="swiper-slide">이미지 3</div></SwiperSlide>
      </Swiper>

      <p className="Description">
        선택하신 정보로 선물을 추천해드립니다.<br />
        다른 목적으로 사용되지 않으며 제 3자에게 제공되지 않습니다.
      </p>

      <Button text="시작하기" type="black" onClick={() => { console.log("✅ 시작하기 버튼 클릭됨!"); navigate("/questionnaire");}} />
    </div>
  );
};

export default Onboarding;

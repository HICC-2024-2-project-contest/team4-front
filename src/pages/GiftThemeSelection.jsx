import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import "../styles/GiftThemeSelection/GiftThemeSelection.css";

const GiftThemeSelection = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate

  const handleNext = () => {
    navigate("/nextPage"); // 원하는 경로로 이동 (실제 경로로 변경해야 함)
  };

  return (
    <div className="container">
        <Header />
      <h1 className="Title">선물 테마를 선택해보세요!</h1>
      <p className="Description">
        선택하신 정보를 기반으로 선물을 추천해드립니다. 
        <br />
        다른 목적으로 사용되지 않으며 제 3자에게 제공되지 않습니다.
      </p>

      <div className="ButtonGrid">
        <button className="ThemeButton">생일</button>
        <button className="ThemeButton">기념일</button>
        <button className="ThemeButton">집들이</button>
        <button className="ThemeButton">감사</button>
        <button className="ThemeButton">축하</button>
        <button className="ThemeButton">시트벌</button>
      
      </div>
         <div className="ButtonContainer">
         <Button text="시작하기" type="black" onClick={() => { 
          console.log("✅ 다음 클릭됨!"); 
          navigate("/KakaoTalkAgree");
         }} />
        </div>
        
        <div className="Footer"></div>
    </div>
  );
};

export default GiftThemeSelection;

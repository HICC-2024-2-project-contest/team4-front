import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import "../styles/GiftThemeSelection/GiftThemeSelection.css";
import { useUser } from "../components/contexts/UserContext";

const GiftThemeSelection = () => {
  console.log("✅ Questionnaire 화면 렌더링됨!"); 
  const { userData, setUserData } = useUser(); 

  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate


  return (
    <div className="Pagecontainer">
        <Header />
      <h1 className="Title">선물 테마를 선택해보세요!</h1>
      <p className="Description">
        선택하신 정보를 기반으로 선물을 추천해드립니다. 
        <br />
        다른 목적으로 사용되지 않으며 제 3자에게 제공되지 않습니다.
      </p>

      <div className="SelectionGroup">
        <div className="ButtonGroup">
          {["생일", "기념일", "집들이", "감사", "축하", "시즌별"].map(item => (
            <button key={item} className={`SelectionButton theme ${userData.theme === item ? "selected" : ""}`}
                    onClick={() => setUserData(prev => ({ ...prev, theme: item }))}>
              {item}
            </button>
          ))}
        </div>
      
      </div>
         <div className="ButtonContainer">
         <Button text="다음" type="black" onClick={() => { 
          console.log("✅ 다음 클릭됨!"); 
          navigate("/KakaoTalkAgree");
         }} />
        </div>

        <div className="Footer"></div>
    </div>
  );
};

export default GiftThemeSelection;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import "../styles/Questionnaire/Questionnaire.css";
import Header from "../components/common/Header";

const Questionnaire = () => {
  console.log("✅ Questionnaire 화면 렌더링됨!"); 
  const [gender, setGender] = useState(null);
  const [relationship, setRelationship] = useState(null);
  const navigate = useNavigate(); // ✅ 네비게이트 함수 추가

  return (
    <div className="PageContainer">
      <Header />
      <h1 className="Title">상대방에 대해 알려주세요</h1>
      <p className="Description">
        선택하신 정보로 선물을 추천해드립니다.<br />
        다른 목적으로 사용되지 않으며 제 3자에게 제공되지 않습니다.
      </p>
      
      <div className="SelectionGroup">
        <div className="ButtonGroup">
          <button className={`SelectionButton gender ${gender === "남자" ? "selected" : ""}`}
                  onClick={() => setGender("남자")}>남자</button>
          <button className={`SelectionButton gender ${gender === "여자" ? "selected" : ""}`}
                  onClick={() => setGender("여자")}>여자</button>
        </div>
      </div>

      <div className="SelectionGroup">
        <div className="ButtonGroup">
          {["부모님", "애인", "친구"].map(item => (
            <button key={item} className={`SelectionButton relationship ${relationship === item ? "selected" : ""}`}
                    onClick={() => setRelationship(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="ButtonContainer">
        <Button text="다음" type="black" onClick={() => { 
          console.log("✅ 다음 버튼 클릭됨!"); 
          navigate("/gift_theme_Selection");
        }} />
      </div>

      <div className="Footer"></div>
    </div>
  );
};

export default Questionnaire;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Header from "../components/common/Header";

const Questionnaire = () => {
  console.log("✅ Questionnaire 화면 렌더링됨!"); 
  const [gender, setGender] = useState(null);
  const [relationship, setRelationship] = useState(null);

  return (
    <div className="PageContainer">
      <Header />
      <h1 className="Title">상대방에 대해 알려주세요</h1>
      <p className="Description">
        선택하신 정보로 선물을 추천해드립니다.<br />
        다른 목적으로 사용되지 않으며 제 3자에게 제공되지 않습니다.
      </p>
      
      <div className="SelectionGroup">
        <h2 className="Subtitle">성별</h2>
        <div className="ButtonGroup">
          <button className={`SelectionButton ${gender === "남자" ? "selected" : ""}`}
                  onClick={() => setGender("남자")}>남자</button>
          <button className={`SelectionButton ${gender === "여자" ? "selected" : ""}`}
                  onClick={() => setGender("여자")}>여자</button>
        </div>
      </div>

      <div className="SelectionGroup">
        <h2 className="Subtitle">관계</h2>
        <div className="ButtonGroup">
          {["부모님", "애인", "친구"].map(item => (
            <button key={item} className={`SelectionButton ${relationship === item ? "selected" : ""}`}
                    onClick={() => setRelationship(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <Button text="다음" type="black" onClick={() => alert(`성별: ${gender}, 관계: ${relationship}`)} disabled={!gender || !relationship} />

    </div>
  );
};

export default Questionnaire;

import "../../styles/result/Loading.css";
import character1 from "../../assets/img_result/character1.svg";
import character2 from "../../assets/img_result/character2.svg";
import ground from "../../assets/img_result/ground.svg";

import { useState, useEffect } from "react";

const Loading = () => {
  const [showFirstCharacter, setShowFirstCharacter] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstCharacter((prev) => !prev);
    }, 1000); // 1초마다 실행

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, []);

  return (
    <div className="Loading">
      <h5>선물 고르는 중...</h5>
      <h6>TIP</h6>
      <p>
        상대방에게 감정을 전달할 수 있는
        <br />
        선물을 골라보세요!
      </p>
      <img
        src={showFirstCharacter ? character1 : character2}
        alt="마스코트"
        className="character"
      />
      <img src={ground} alt="땅" className="ground" />
    </div>
  );
};

export default Loading;

import { useState } from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import "../../styles/kakao/WriteName.css";

const WriteName = () => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  return (
    <div className="blackBox">
      <div className="WriteName">
        <input
          type="text"
          placeholder="12자 이내의 별명을 입력해주세요"
          onChange={(e) => setName(e.target.value)}
        />
        <h6>이름 입력</h6>
        <p>마지막으로 상대방의 이름을 입력해주세요!</p>
        <Button
          text={"완료"}
          type={"white"}
          onClick={() => {
            if (name.trim() === "") {
              alert("이름을 입력해주세요!"); // 빈 값이면 경고창 띄우기
              return;
            }
            nav("/result"); // 값이 있을 때만 이동
          }}
          disabled={name.trim() === ""} // 빈 값이면 버튼 비활성화
        />
      </div>
    </div>
  );
};

export default WriteName;

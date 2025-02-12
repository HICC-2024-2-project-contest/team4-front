import { useState, useEffect, useRef } from "react";
import useUser from "../../hooks/UseUser";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import "../../styles/kakao/WriteName.css";

const WriteName = () => {
  const nav = useNavigate();
  const { userData, setUserData } = useUser();
  const [name, setName] = useState("");
  const [focus, setFocus] = useState(false);
  const [mobile, setMobile] = useState(false);
  const inputRef = useRef(null);

  // 모바일인지 체크
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent;
      setMobile(
        /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(userAgent)
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 모바일일때 자동으로 focus 되도록
  useEffect(() => {
    if (focus && inputRef.current) {
      inputRef.current.focus();
      console.log(inputRef.current);
    }
  }, [focus]);

  // 엔터키 눌렀을때
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (focus) {
        setFocus(false);
      } else if (name.trim() !== "") {
        nav("/result");
      }
    }
  };

  return (
    <div className="Name_Keyboard">
      {!focus && (
        <div className="blackBox">
          <div className="WriteName">
            <input
              type="text"
              value={name}
              placeholder="12자 이내의 별명을 입력해주세요"
              onChange={(e) => setName(e.target.value)}
              onFocus={() => mobile && setFocus(true)}
              onKeyDown={handleKeyDown}
            />
            <h6>이름 입력</h6>
            <p>마지막으로 상대방의 이름을 입력해주세요!</p>
            <Button
              text={"완료"}
              type={name.trim() !== "" ? "white" : "gray"}
              onClick={() => {
                if (name.trim() === "") {
                  alert("이름을 입력해주세요!"); // 빈 값이면 경고창 띄우기
                  return;
                }
                setUserData((prev) => ({ ...prev, name: name }));
                nav("/result"); // 값이 있을 때만 이동
              }}
              disabled={name.trim() === ""} // 빈 값이면 버튼 비활성화
            />
          </div>
        </div>
      )}
      {focus && (
        <div className="mobileFocus">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => {
              setFocus(false);
              console.log("focus 해제", focus);
            }}
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
        </div>
      )}
    </div>
  );
};

export default WriteName;

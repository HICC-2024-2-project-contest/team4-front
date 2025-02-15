import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/UseUser";
import "../../styles/buttons/NextButton.css";

const NextButton = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUser();

  return (
    <div className="NextButtonContainer ">
      <Button
        text="다음"
        type={userData.theme ? "black" : "white"}
        onClick={() => {
          //   console.log("✅ 다음 버튼 클릭됨!");
          if (!userData.theme) {
            alert("선물 테마를 선택해주세요!");
            return;
          }
          navigate("/kakao_talk1"); /*여기서 윤서님 페이지로 넘어갑니다!*/
        }}
        disabled={!userData.theme}
      />
    </div>
  );
};

export default NextButton;

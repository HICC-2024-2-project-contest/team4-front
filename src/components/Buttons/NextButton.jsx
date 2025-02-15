import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/UseUser";
import "../../styles/buttons/NextButton.css";

const NextButton = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUser();

  return (
    <div className="NextButtonContainer">
      <Button
        text="다음"
        type={userData.gender && userData.relationship ? "black" : "white"}
        onClick={() => {
          //   console.log("✅ 다음 버튼 클릭됨!");
          if (!userData.gender || !userData.relationship) {
            alert("성별과 관계를 선택해주세요!");
            return;
          }
          navigate("/gift_theme_Selection");
        }}
        disabled={!userData.gender || !userData.relationship}
      />
    </div>
  );
};

export default NextButton;

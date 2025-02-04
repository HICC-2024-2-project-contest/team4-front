import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import "../../styles/buttons/NextButton.css";

const NextButton = () => {
    const navigate = useNavigate();
    const { userData, setUserData } = useUser(); 

    return (
        <div className="NextButtonContainer ">
        <Button 
        text="다음" 
        type={userData.theme ?  "black" : "white"}
        onClick={() => { 
        console.log("✅ 다음 버튼 클릭됨!");
        navigate("/kakao_talk1");
        }} 
        disabled={!userData.theme}
        />
        </div>
    );
};

export default NextButton;
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
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
        console.log("✅ 다음 버튼 클릭됨!"); 
        navigate("/gift_theme_Selection");
  }} 
  disabled={!userData.gender || !userData.relationship} 
/>
</div>
    );
};

export default NextButton;
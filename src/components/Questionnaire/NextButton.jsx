import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../components/contexts/UserContext";
import "../../styles/questionnaire/NextButton.css";

const NextButton = () => {
    const navigate = useNavigate();
    const { userData, setUserData } = useUser(); 

    return (
        <div className="Buttoncontainer">
        <Button 
        text="다음" 
        type="black" 
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
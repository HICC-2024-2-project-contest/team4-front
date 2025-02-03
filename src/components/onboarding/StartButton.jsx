import Button from "../common/Button";
import "../../styles/onboarding/StartButton.css";
import { useNavigate } from "react-router-dom";


const StartButton = () =>{
    const navigate = useNavigate();

    return(
    <div className="StartButtonContainer">
        <Button text="시작하기" type="black" onClick={() => { 
          console.log("✅ 시작하기 버튼 클릭됨!"); 
          navigate("/questionnaire");
        }} />
      </div>
      );
};

export default StartButton;
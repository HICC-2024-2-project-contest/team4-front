import Header from "../components/common/Header";
import Agree from "../components/kakao/Agree";
import Ment from "../components/kakao/ment";
import SpeechBubble from "../components/kakao/SpeechBubble";
import { useUser } from "../components/contexts/UserContext";

const KakaoTalkAgree = () => {

  const { userData } = useUser(); 
  console.log(userData); {/*유저 데이터 확인용*/}

  return (
    <div className="KakaoTalk KakaoTalkAgree">
      <Header />
      <Ment />
      <SpeechBubble />
      <Agree />
    </div>
  );
};

export default KakaoTalkAgree;

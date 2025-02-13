import Header from "../components/common/Header";
import Agree from "../components/kakao/Agree";
import Ment from "../components/kakao/ment";
import SpeechBubble from "../components/kakao/SpeechBubble";

const KakaoTalkAgree = () => {
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

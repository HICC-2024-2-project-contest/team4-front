import Header from "../components/common/Header";
import FileUpload from "../components/kakao/FileUpload";
import Ment from "../components/kakao/ment";
import SpeechBubble from "../components/kakao/SpeechBubble";

const KakaoTalkUpload = () => {
  return (
    <div className="KakaoTalk KakaoTalkUpload">
      <Header />
      <Ment />
      <SpeechBubble />
      <FileUpload />
    </div>
  );
};

export default KakaoTalkUpload;

<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Onboarding from "./pages/Onboarding";
import Questionnaire from "./pages/Questionaire";

function App() {
  console.log("✅ App 컴포넌트 렌더링됨!");
  return (
      <div className="AppContainer">
        <div className="App">
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
          </Routes>
        </div>
      </div>
=======
import "./App.css";
import { Routes, Route } from "react-router-dom";

// 페이지 가져오기
import KakaoTalkAgree from "./pages/KakaoTalkAgree";
import KakaoTalkUpload from "./pages/KakaoTalkUpload";
import KakaoTalkName from "./pages/KakaoTalkName";
import Result from "./pages/Result";

function App() {
  return (
    <div className="AppContainer">
      <div className="App">
        <Routes>
          <Route path="/kakao_talk1" element={<KakaoTalkAgree />} />
          <Route path="/kakao_talk2" element={<KakaoTalkUpload />} />
          <Route path="/kakao_talk3" element={<KakaoTalkName />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </div>
>>>>>>> 09ff2c3143299dcc46472be12394e95f43ec1ee5
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Onboarding from "./components/common/pages/Onboarding";
import Questionnaire from "./components/common/pages/Questionaire";

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
  );
}

export default App;

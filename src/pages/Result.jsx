import Header from "../components/common/Header";
import Ment2 from "../components/result/Ment2";
import Inventory from "../components/result/Inventory";
import "../styles/result/Result.css";

const Result = () => {
  return (
    <div className="Result">
      <Header />
      <Ment2 />
      <Inventory />
    </div>
  );
};

export default Result;

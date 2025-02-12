import "./Header.css";
import logo from "../../assets/images/presenTalk_logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  return (
    <div className="Header">
      <img
        src={logo}
        alt="프레젠톡 로고"
        onClick={() => {
          nav("/");
        }}
      />
    </div>
  );
};

export default Header;

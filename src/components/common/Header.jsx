import "./Header.css";
import logo from "../../assets/images/presenTalk_logo.svg";

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="프레젠톡 로고" />
    </div>
  );
};

export default Header;

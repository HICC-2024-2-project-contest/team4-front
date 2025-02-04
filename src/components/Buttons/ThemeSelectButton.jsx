import { useUser } from "../../components/contexts/UserContext";
import "../../styles/buttons/ThemeSelectButton.css";

const ThemeSelectButton = () => {
  const { userData, setUserData } = useUser();
  const themes = ["생일", "기념일", "집들이", "감사", "축하", "시즌별"];

  return (
    <div className="gift-theme-container">
      <div className="gift-theme-row">
        {themes.slice(0, 3).map((item) => (
          <button
            key={item}
            className={`gift-theme-item ${userData.theme === item ? "active" : "inactive"}`}
            onClick={() => setUserData((prev) => ({ ...prev, theme: item }))}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="gift-theme-row">
        {themes.slice(3, 6).map((item) => (
          <button
            key={item}
            className={`gift-theme-item ${userData.theme === item ? "active" : "inactive"}`}
            onClick={() => setUserData((prev) => ({ ...prev, theme: item }))}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelectButton;

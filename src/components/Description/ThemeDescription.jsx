import "../../styles/description/ThemeDescription.css";

const ThemeSelectText = () => {
  return (
    <div className="gift-theme-text-container">
      <h2 className="gift-theme-title">선물 테마를 선택해보세요!</h2>
      <p className="gift-theme-description">
        선택하신 정보를 기반으로 선물을 추천해드립니다. <br />
        다른 목적으로 사용되거나 제 3자에게 제공되지 않습니다.
      </p>
    </div>
  );
};

export default ThemeSelectText;

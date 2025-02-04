import Header from "../components/common/Header";
import ThemeDescription from "../components/Description/ThemeDescription";
import ThemeSelectButton from "../components/Buttons/ThemeSelectButton";
import ThemeNextButton from "../components/Buttons/ThemeNextButton";

const GiftThemeSelection = () => {
  console.log("✅ Questionnaire 화면 렌더링됨!"); 
  return (
    <div className="GiftTheme Page">
        <Header />
        <ThemeDescription />
        <ThemeSelectButton />
        <ThemeNextButton />
    </div>
  );
};

export default GiftThemeSelection;

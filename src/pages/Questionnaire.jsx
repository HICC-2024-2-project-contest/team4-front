import Header from "../components/common/Header";
import Description from "../components/Description/Description";
import SelectionButton from "../components/Buttons/SelectionButton";
import NextButton from "../components/Buttons/NextButton";
import Footer from "../components/common/Footer";

const Questionnaire = () => {
 
 return (
    <div className="Questionnaire Page">
      <Header />
      <Description />
      <SelectionButton />
      <NextButton />
      <Footer />
    </div>
  );
};

export default Questionnaire;

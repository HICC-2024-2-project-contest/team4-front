import Header from "../components/common/Header";
import Description from "../components/Questionnaire/Description";
import SelectionButton from "../components/Questionnaire/SelectionButton";
import NextButton from "../components/Questionnaire/NextButton";
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

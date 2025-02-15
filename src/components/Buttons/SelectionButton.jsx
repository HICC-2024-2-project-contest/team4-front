import MaleIcon from "../../assets/icons/male_icon.svg";
import FemaleIcon from "../../assets/icons/female_icon.svg";
import useUser from "../../hooks/UseUser";
import "../../styles/buttons/SelectionButton.css";

const SelectionButton = () => {
  const { userData, setUserData } = useUser();
  const relationshipMapping = {
    부모님: "parent",
    애인: "couple",
    친구: "friend",
  };

  return (
    <div>
      <div className="SelectionGroup">
        <div className="ButtonGroup">
          <button
            className={`SelectionButton gender ${
              userData.gender === "male" ? "GenderSelected" : ""
            }`}
            onClick={() => setUserData((prev) => ({ ...prev, gender: "male" }))}
          >
            <img src={MaleIcon} alt="남자 아이콘" width={92} height={92} />
            <span>남자</span>
          </button>
          <button
            className={`SelectionButton gender ${
              userData.gender === "female" ? "GenderSelected" : ""
            }`}
            onClick={() =>
              setUserData((prev) => ({ ...prev, gender: "female" }))
            }
          >
            <img src={FemaleIcon} alt="여자 아이콘" width={92} height={92} />
            <span>여자</span>
          </button>
        </div>
      </div>

      <div className="SelectionGroup">
        <div className="ButtonGroup">
          {["부모님", "애인", "친구"].map((item) => (
            <button
              key={item}
              className={`SelectionButton relationship ${
                userData.relationship === relationshipMapping[item]
                  ? "selected"
                  : ""
              }`}
              onClick={() => {
                setUserData((prev) => ({
                  ...prev,
                  relationship: relationshipMapping[item],
                }));
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectionButton;

  import MaleIcon from "../../assets/icons/male_icon.svg";
  import FemaleIcon from "../../assets/icons/female_icon.svg";
  import { useUser } from "../contexts/UserContext";
  import "../../styles/buttons/SelectionButton.css";

  const SelectionButton = () => {
      const { userData, setUserData } = useUser(); 

      return (
      <div>
        <div className="SelectionGroup">
          <div className="ButtonGroup">
            <button className={`SelectionButton gender ${userData.gender === "남자" ? "GenderSelected" : ""}`}
                    onClick={() => setUserData(prev => ({ ...prev, gender: "남자" }))}>
                      <img src={MaleIcon} alt="남자 아이콘" width={92} height={92} />
                      <span>남자</span>
                      </button>
            <button className={`SelectionButton gender ${userData.gender === "여자" ? "GenderSelected" : ""}`}
                    onClick={() => setUserData(prev => ({ ...prev, gender: "여자" }))}>
                      <img src={FemaleIcon} alt="여자 아이콘" width={92} height={92} />
                      <span>여자</span>
                      </button>
          </div>
        </div>

        <div className="SelectionGroup">
          <div className="ButtonGroup">
            {["부모님", "애인", "친구"].map(item => (
              <button key={item} className={`SelectionButton relationship ${userData.relationship === item ? "selected" : ""}`}
                      onClick={() => setUserData(prev => ({ ...prev, relationship: item }))}>
                {item}
              </button>
            ))}
          </div>
        </div>
        </div>
      );
  };

  export default SelectionButton;
  
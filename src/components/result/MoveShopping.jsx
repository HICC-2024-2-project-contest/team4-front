import Button from "../common/Button";
import "../../styles/result/MoveShopping.css";

const MoveShopping = ({ img, title, link, onClose }) => {
  const clickCard = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="grayBox">
      <div className="MoveShopping">
        <h6 onClick={onClose}>X</h6>
        <div className="image_title">
          <img src={img} alt="제품 이미지" />
          <p dangerouslySetInnerHTML={{ __html: title }}></p>
        </div>
        <Button text={"스토어로 이동"} type={"white"} onClick={clickCard} />
      </div>
    </div>
  );
};

export default MoveShopping;

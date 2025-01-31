import "../../styles/result/Card.css";
import grayImage from "../../assets/img_result/gray.svg";

const Card = ({ inventory }) => {
  const clickCard = () => {
    window.open(inventory.link, "_blank");
  };

  console.log(inventory);

  return (
    <div className="Card" onClick={clickCard}>
      <img
        src={inventory.image}
        alt="제품 사진"
        onError={(e) => {
          e.target.onerror = null; // 무한 루프 방지
          e.target.src = grayImage;
        }}
      />
      <div className="text">
        <h6>{inventory.title}</h6>
        <h5>{inventory.price.toLocaleString()}원</h5>
      </div>
    </div>
  );
};

export default Card;

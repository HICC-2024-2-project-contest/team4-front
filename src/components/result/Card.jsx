import "../../styles/result/Card.css";

const Card = ({ inventory }) => {
  const clickCard = () => {
    window.open(inventory.link, "_blank");
  };

  console.log(inventory);

  return (
    <div className="Card" onClick={clickCard}>
      <img src={inventory.image} alt="제품 사진" />
      <div className="text">
        <h6>{inventory.title}</h6>
        <h5>{inventory.price.toLocaleString()}원</h5>
      </div>
    </div>
  );
};

export default Card;

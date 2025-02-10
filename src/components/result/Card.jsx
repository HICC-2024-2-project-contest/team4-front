import "../../styles/result/Card.css";
import grayImage from "../../assets/img_result/gray.svg";
import MoveShopping from "./MoveShopping";
import { useState } from "react";

const Card = ({ inventory }) => {
  const [click, setClick] = useState(false);

  const onCloseEvent = () => {
    setClick(false);
  };

  return (
    <div>
      <div
        className="Card"
        onClick={() => {
          setClick(true);
        }}
      >
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
      {click && (
        <MoveShopping
          img={inventory.image}
          title={inventory.title}
          link={inventory.link}
          onClose={onCloseEvent}
        />
      )}
    </div>
  );
};

export default Card;

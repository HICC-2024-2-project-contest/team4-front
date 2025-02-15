import "../../styles/result/Card.css";
import grayImage from "../../assets/img_result/gray.svg";
import MoveShopping from "./MoveShopping";
import { useState, useEffect } from "react";
import axios from "axios";

const Card = ({ inventory }) => {
  const [click, setClick] = useState(false);
  const [changedImage, setChangedImage] = useState("");

  const onCloseEvent = () => {
    setClick(false);
  };

  useEffect(() => {
    const changeImage = async ({ url }) => {
      if (!url.startsWith("https://kream")) {
        // URL이 "https://kream"으로 시작하지 않으면 빠져나옴
        setChangedImage(url); // 그대로 원본 이미지를 사용
        return;
      }

      try {
        const response = await axios.get(
          `https://app.presentalk.store/api/proxy/kream?url=${encodeURIComponent(
            url
          )}`,
          {
            responseType: "blob",
          }
        );
        const imageBlob = response.data;
        const imageUrl = URL.createObjectURL(imageBlob);
        setChangedImage(imageUrl);
      } catch (error) {
        console.log("이미지 변환 실패", error);
      }
    };
    if (inventory.image) {
      changeImage({ url: inventory.image });
    }
  }, [inventory]);

  return (
    <div>
      <div
        className="Card"
        onClick={() => {
          setClick(true);
        }}
      >
        <img
          src={changedImage}
          alt="제품 사진"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = grayImage;
          }}
        />
        <div className="text">
          <h6 dangerouslySetInnerHTML={{ __html: inventory.title }} />
          <h5>{inventory.price.toLocaleString()}원</h5>
        </div>
      </div>
      {click && (
        <MoveShopping
          img={changedImage}
          title={inventory.title}
          link={inventory.link}
          onClose={onCloseEvent}
        />
      )}
    </div>
  );
};

export default Card;

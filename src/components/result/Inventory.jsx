import { useEffect, useState } from "react";
import Category from "./Category";
import Card from "./Card";
import "../../styles/result/Inventory.css";
import axios from "axios";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInventory = async () => {
      try {
        const response = await axios.get("/data/data.json");
        setInventory(response.data.data || []);
        // 중복 제거
        const uniqueCategories = [
          ...new Set(response.data.data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
        console.log("선물 리스트 받아오기 성공", response.data.data);
        setLoading(false);
      } catch (error) {
        console.log("선물 리스트 받아오기 실패", error);
      }
    };

    getInventory();
  }, []);

  const onClick = () => {
    return <div>click</div>;
  };

  if (loading) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="Inventory">
      <div className="Inventory_category">
        <Category text={categories[0]} type={"black"} onClick={onClick} />
        <Category text={categories[1]} type={"gray"} onClick={onClick} />
        <Category text={categories[2]} type={"gray"} onClick={onClick} />
      </div>
      <div className="Inventory_item">
        <Card inventory={inventory[0]} />
        <Card inventory={inventory[1]} />
        <Card inventory={inventory[2]} />
      </div>
    </div>
  );
};

export default Inventory;

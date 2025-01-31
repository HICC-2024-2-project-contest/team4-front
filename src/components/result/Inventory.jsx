import { useEffect, useState } from "react";
import Category from "./Category";
import Card from "./Card";
import Loading from "./Loading";
import "../../styles/result/Inventory.css";
import axios from "axios";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
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

        // 기본 선택된 카테고리 설정
        if (uniqueCategories.length > 0) {
          setSelectedCategory(uniqueCategories[0]);
        }

        setCategories(uniqueCategories);
        console.log("선물 리스트 받아오기 성공", response.data.data);
        setLoading(false);
      } catch (error) {
        console.log("선물 리스트 받아오기 실패", error);
      }
    };

    getInventory();
  }, []);

  // 선택된 카테고리에 해당하는 아이템 필터링
  const filteredInventory = inventory.filter(
    (item) => item.category === selectedCategory
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="Inventory">
      <div className="Inventory_category">
        {categories.map((category, index) => (
          <Category
            key={index}
            text={category}
            type={selectedCategory === category ? "black" : "gray"}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </div>
      <div className="Inventory_item">
        {filteredInventory.map((item) => (
          <Card key={item.id} inventory={item} />
        ))}
      </div>
    </div>
  );
};

export default Inventory;

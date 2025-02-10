import { useEffect, useState, useRef } from "react";
import Category from "./Category";
import Card from "./Card";
import Loading from "./Loading";
import "../../styles/result/Inventory.css";
import axios from "axios";
import { IoReloadCircleSharp } from "react-icons/io5"; //reload 아이콘
import { IoIosArrowDropupCircle } from "react-icons/io"; //up 아이콘

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const inventoryItemRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (inventoryItemRef.current) {
        if (inventoryItemRef.current.scrollTop > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    const inventoryItem = inventoryItemRef.current;
    if (inventoryItem) {
      inventoryItem.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (inventoryItem) {
        inventoryItem.removeEventListener("scroll", handleScroll);
      }
    };
  }, [inventory]);

  // 맨 위로 버튼
  const moveToTop = () => {
    if (inventoryItemRef.current) {
      inventoryItemRef.current.scrollTop = 0;
    }
    console.log("하이");
  };

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
      <div className="Inventory_item" ref={inventoryItemRef}>
        {filteredInventory.map((item) => (
          <Card key={item.id} inventory={item} />
        ))}

        {isScrolled ? (
          <IoIosArrowDropupCircle className="up" onClick={moveToTop} />
        ) : (
          <IoReloadCircleSharp className="reload" />
        )}
      </div>
    </div>
  );
};

export default Inventory;

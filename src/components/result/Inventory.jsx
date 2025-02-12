import { useEffect, useState, useRef, useCallback } from "react";
import useUser from "../../hooks/UseUser";
import Category from "./Category";
import Card from "./Card";
import Loading from "./Loading";
import "../../styles/result/Inventory.css";
import axios from "axios";
import { IoIosArrowDropupCircle } from "react-icons/io"; // up 아이콘
import { IoReloadCircleSharp } from "react-icons/io5"; // reload 아이콘

const Inventory = () => {
  const { userData } = useUser();
  const [inventory, setInventory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentItems, setCurrentItems] = useState({});
  const inventoryItemRef = useRef(null);
  const [lastItems, setLastItems] = useState({});
  const [page, setPage] = useState({});

  // 초기 데이터 불러오기
  const getInventory = useCallback(async () => {
    const formData = new FormData();
    formData.append("file", userData.file);

    try {
      const queryString = new URLSearchParams({
        targetName: userData.name,
        relation: userData.relationship,
        sex: userData.gender,
        theme: userData.theme,
      }).toString();

      const response = await axios.post(
        `https://app.presentalk.store/api/gpt/process?${queryString}`,
        formData,
        { headers: { Accept: "application/json" } }
      );
      setInventory(response.data || []);
      const uniqueCategories = [
        ...new Set(response.data.map((item) => item.keyword)),
      ];
      setCategories(uniqueCategories);
      if (uniqueCategories.length > 0) {
        setSelectedCategory(uniqueCategories[0]);
      }
      setLoading(false);
    } catch (error) {
      console.log("선물 리스트 받아오기 실패", error);
    }
  }, [userData]);

  useEffect(() => {
    getInventory();
  }, [getInventory]);

  // 아이템 로딩(20개씩)
  const loadNextItems = useCallback(() => {
    const filteredInventory = inventory.filter(
      (item) => item.keyword === selectedCategory
    );
    const currentPage = page[selectedCategory] || 0;
    const start = currentPage * 20;
    const end = start + 20;
    const newItems = filteredInventory.slice(start, end);

    if (newItems.length === 0) {
      // console.log(`마지막 아이템 확인 - ${selectedCategory}는 더 이상 없음`);
      setLastItems((prev) => ({ ...prev, [selectedCategory]: true }));
    } else {
      setCurrentItems((prevItems) => ({
        ...prevItems,
        [selectedCategory]: newItems,
      }));
      setPage((prevPage) => ({
        ...prevPage,
        [selectedCategory]: currentPage + 1,
      }));
    }
  }, [inventory, selectedCategory, page, setLastItems]);

  // 스크롤 처리
  useEffect(() => {
    const checkAndAttachListener = () => {
      if (inventoryItemRef.current) {
        const handleScroll = () => {
          setIsScrolled(inventoryItemRef.current.scrollTop > 0);
        };

        inventoryItemRef.current.addEventListener("scroll", handleScroll);
        handleScroll(); // 초기 실행

        return () => {
          inventoryItemRef.current?.removeEventListener("scroll", handleScroll);
        };
      } else {
        setTimeout(checkAndAttachListener, 100); // 0.1초 후 다시 확인
      }
    };

    checkAndAttachListener();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setCurrentItems([]);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedCategory && !currentItems[selectedCategory]) {
      loadNextItems();
    }
  }, [selectedCategory, currentItems, loadNextItems]);

  // 로딩 중일 때
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
        {(currentItems[selectedCategory] || []).map((item) => (
          <Card key={item.id} inventory={item} />
        ))}

        {isScrolled ? (
          <IoIosArrowDropupCircle
            className="up"
            onClick={() => (inventoryItemRef.current.scrollTop = 0)}
          />
        ) : (
          !lastItems[selectedCategory] && (
            <IoReloadCircleSharp className="reload" onClick={loadNextItems} />
          )
        )}
      </div>
    </div>
  );
};

export default Inventory;

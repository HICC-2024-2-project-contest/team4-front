import "../../styles/result/Category.css";

const Category = ({ text, type, onClick }) => {
  return (
    // 배경색에 따라 type은 black, gray 2개로 분리
    <button onClick={onClick} className={`Category Category_${type}`}>
      {text}
    </button>
  );
};

export default Category;

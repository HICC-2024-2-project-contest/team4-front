import "./Button.css";

const Button = ({ text, type, onClick }) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  );
};

export default Button;
 // 배경색에 따라 type은 black, white 2개로 분리
import { useState } from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import "../../styles/kakao/FileUpload.css";

const FileUpload = () => {
  const nav = useNavigate();
  const [upload, setUpload] = useState(false);
  return (
    <div className="blackBox">
      <div className="FileUpload">
        <input
          type="checkbox"
          checked={upload}
          onChange={() => setUpload(!upload)}
        />
        <h6>파일 업로드</h6>
        <p>움직이는 대화 상자를 클릭해 도움을 받아보세요!</p>
        <Button
          text={"다음"}
          type={"white"}
          onClick={() => {
            if (!upload) {
              alert("파일을 업로드해야 진행할 수 있습니다!");
              return;
            }
            nav("/kakao_talk3");
          }}
          disabled={!upload}
        />
      </div>
    </div>
  );
};

export default FileUpload;

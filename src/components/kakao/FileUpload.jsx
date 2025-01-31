import { useState } from "react";
import axios from "axios";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import "../../styles/kakao/FileUpload.css";
import arrow from "../../assets/img_kakao/arrow.svg";

const FileUpload = () => {
  const nav = useNavigate();
  const [file, setFile] = useState(null);

  const handleFilesChange = (e) => {
    setFile(e.target.files);
  };

  const handleUPload = async () => {
    if (file == null) {
      alert("파일을 업로드해야 진행할 수 있습니다!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    console.log(file);
    nav("/kakao_talk3");
  };

  return (
    <div className="blackBox">
      <div className="FileUpload">
        <input type="file" onChange={handleFilesChange} id="file-upload" />
        <label htmlFor="file-upload"></label>
        <img src={arrow} alt="Arrow Icon" className="arrow-icon" />
        <h6>파일 업로드</h6>
        <p>움직이는 대화 상자를 클릭해 도움을 받아보세요!</p>
        <Button
          text={"다음"}
          type={"white"}
          onClick={handleUPload}
          disabled={file == null}
        />
      </div>
    </div>
  );
};

export default FileUpload;

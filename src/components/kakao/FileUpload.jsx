import { useState } from "react";
import useUser from "../../hooks/UseUser";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import "../../styles/kakao/FileUpload.css";
import arrow from "../../assets/img_kakao/arrow.svg";
import check from "../../assets/img_kakao/check.svg";

const FileUpload = () => {
  const { userData, setUserData } = useUser();
  const nav = useNavigate();
  const [file, setFile] = useState(null);
  const [stage, setStage] = useState("initial");
  // initial -> exploding -> collapsing -> completed

  const handleFilesChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setStage("exploding");

      setTimeout(() => {
        setStage("collapsing");
        setTimeout(() => {
          setStage("completed");
        }, 3500);
      }, 1000);
    }
  };

  const handleUpload = async () => {
    if (file == null) {
      alert("파일을 업로드해야 진행할 수 있습니다!");
      return;
    }

    setUserData((prev) => ({ ...prev, file: file }));
    nav("/kakao_talk3");
  };

  return (
    <div className="blackBox">
      <div className="FileUpload">
        <div className={`gray_box gray_box_${stage}`}></div>
        <input type="file" onChange={handleFilesChange} id="file-upload" />
        <label htmlFor="file-upload">
          {stage === "completed" ? (
            <img src={check} alt="Check Icon" className="check-icon" />
          ) : (
            <img src={arrow} alt="Arrow Icon" className="arrow-icon" />
          )}
        </label>
        {/* 애니메이션 효과를 위한 동적 원 생성 */}

        {(stage === "exploding" || stage === "collapsing") && (
          <div className="animation-container">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`particle particle_${stage}`}></div>
            ))}
          </div>
        )}

        <h6>파일 업로드</h6>
        <p>움직이는 대화 상자를 클릭해 도움을 받아보세요!</p>
        <Button
          text={"다음"}
          type={file !== null ? "white" : "gray"}
          onClick={handleUpload}
          disabled={file == null}
        />
      </div>
    </div>
  );
};

export default FileUpload;

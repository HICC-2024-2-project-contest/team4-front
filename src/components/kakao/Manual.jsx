import "../../styles/kakao/Manual.css";
// 이미지 불러오기
import chat1 from "../../assets/img_kakao/chat1.svg";
import chat2 from "../../assets/img_kakao/chat2.svg";
import chat3 from "../../assets/img_kakao/chat3.svg";
import chat4_1 from "../../assets/img_kakao/chat4_1.svg";
import chat4 from "../../assets/img_kakao/chat4.svg";

const Manual = ({ closeHelp }) => {
  return (
    <div className="Manual">
      <div
        className="bigBubble"
        onClick={() => {
          closeHelp();
        }}
      >
        <div className="first">
          <div className="ment">
            <div className="number">1</div>
            <h6>
              카카오톡 대화창의 상단 오른쪽 <br />
              서랍을 선택해주세요!
            </h6>
          </div>
          <img src={chat1} alt="서랍 선택" />
        </div>

        <div className="second">
          <div className="ment">
            <div className="number">2</div>
            <h6>
              서랍을 열면 상단 오른쪽에 <br />
              설정 버튼이 있을 거에요
            </h6>
          </div>
          <img src={chat2} alt="설정 버튼" />
        </div>

        <div className="third">
          <div className="ment">
            <div className="number">3</div>
            <h6>
              하단의 &apos;대화 내용 내보내기&apos; <br />
              버튼을 선택해주세요!
            </h6>
          </div>
          <img src={chat3} alt="대화내용 내보내기" />
        </div>

        <div className="fourth">
          <div className="ment">
            <div className="number">4</div>
            <h6>
              &apos;텍스트 메세지만 보내기&apos;를 <br />
              선택하면 파일이 다운로드 됩니다
            </h6>
          </div>
          <div className="fourth_imgs">
            <img src={chat4_1} alt="대화 내용 내보내기" />
            <img src={chat4} alt="텍스트 메세지만 내보내기" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manual;

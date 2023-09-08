import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { ReactComponent as ArrowSvg } from "../assets/icon/arrow_black.svg";
import IndexComponent from "../components/IndexPage/IndexComponent";

const IndexPage = () => {
  const navigate = useNavigate();

  // container 배경색 지정 state
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  return (
    <div className="container2" style={{ backgroundColor: backgroundColor }}>
      <div className="arrow-wrap">
        <ArrowSvg
          className="arrow-icon"
          onClick={() => navigate("/")}
          onMouseOver={() => setBackgroundColor("#000")}
          onMouseLeave={() => setBackgroundColor("#fff")}
        />
      </div>
      {IndexData.map((data) => {
        return (
          <IndexComponent
            number={data.number}
            title={data.title}
            period={data.period}
            description={data.description}
            link={data.link}
            key={data.number}
          />
        );
      })}
    </div>
  );
};

// 목차 데이터
const IndexData = [
  {
    number: "01",
    title: "LabradorLabs Intern",
    period: "2023.01.02 - 2023.04.28",
    description: `래브라도랩스는 소스코드, 바이너리, 컨테이너에 대한 취약점을 분석하고 수정하는 소프트웨어 구성 분석 솔루션인 'Labrador' 플랫폼을 개발하는 회사이다. 인턴으로 4개월 동안 프론트팀에서 프론트엔드 개발과 UI 디자인 업무를 맡으며 Labrador의 페이지 디자인 및 개발, UI 컴포넌트 수정 및 코드 적용, Labrador의 삼성화재 버전인 IVAS의 UI 개선 업무를 진행했다.`,
    link: 1,
  },
];

export default IndexPage;

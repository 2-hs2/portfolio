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
      <IndexComponent
        data={IndexData[0]}
        setBackgroundColor={setBackgroundColor}
      />
      <IndexComponent
        data={IndexData[1]}
        setBackgroundColor={setBackgroundColor}
      />
      <IndexComponent
        data={IndexData[2]}
        setBackgroundColor={setBackgroundColor}
      />
      <IndexComponent
        data={IndexData[3]}
        setBackgroundColor={setBackgroundColor}
      />
      <IndexComponent
        data={IndexData[4]}
        setBackgroundColor={setBackgroundColor}
      />
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
  {
    number: "02",
    title: "APP Project",
    period: "2023.07.02 -",
    description: `'대학생 모임 기반 커뮤니티 앱 개발, Flint'를 주제로 하는 앱 프로젝트이다. 해당 프로젝트에서 프론트엔드 개발자와 UI 보조 디자이너로 활약했다. React Native를 이용하여 앱 내의 페이지들을 개발하고 로고 및 아이콘 등의 그래픽 요소들을 디자인 및 페이지 디자인에 대한 피드백을 맡았다.`,
    link: 2,
  },
  {
    number: "03",
    title: "Ajou Paran Project",
    period: "2022.03.02 - 2022.06.17",
    description: `파란학기제는 학생 스스로 도전과제를 설계하여 실천하는 아주대학교의 학점 인정 프로젝트이다. '아주대학교 개발자들을 위한 커뮤니티 웹사이트 Cola 개발'을 주제로 팀 내에서 그래픽 및 UI 디자인과 메인 페이지 개발을 맡았다. 로고와 캐릭터 디자인 그리고 UI 디자인을 주요 업무로 진행하며 페이지 개발을 경험해볼 수 있었다.`,
    link: 3,
  },
  {
    number: "04",
    title: "Mini Project",
    period: "2023.05.10 - 2022.05.12",
    description: `'일상을 기록하는 나만의 캘린더'를 주제로 3일 동안 간단하게 진행한 프로젝트이다. 하루의 기분을 이모티콘으로 달력에 표시하고, 투두리스트 및 일기 작성의 기능이 주 기능이었다. 프론트엔드 개발을 물론 MongoDB를 활용하여 간단한 백엔드 작업까지 진행하였다. 기획부터 UI 와이어프레임 및 디자인, 프론트엔드 및 백엔드 개발까지 전 과정을 진행했다.`,
    link: 4,
  },
  {
    number: "05",
    title: "ETC : Design",
    period: "2019 - 2023",
    description:
      "프론트엔드 개발과 외에도 다양한 디자인 경험을 갖춤으로써 단순히 만들어진 디자인을 구현하는 프론트엔드 개발자가 아닌 디자인에 의견을 제시하고 개선할 수 있는 프론트엔드 개발자가 되고자 하였다.",
    link: 5,
  },
];

export default IndexPage;

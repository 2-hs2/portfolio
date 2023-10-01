import { useEffect, useState } from "react";

import ScreenImg from "../../assets/img/flint/screen-example.png";
import LogoImg from "../../assets/img/flint/flint-logo.png";
import CardImg from "../../assets/img/flint/card.png";
import IconImg from "../../assets/img/flint/icon.png";

import FigmaImg from "../../assets/icon/techStack/figma-logo.png";
import ProcreateImg from "../../assets/icon/techStack/procreate-logo.png";
import IllustImg from "../../assets/icon/techStack/illustrator-logo.png";
import CssImg from "../../assets/icon/techStack/css.png";
import HtmlImg from "../../assets/icon/techStack/html.svg";
import JsImg from "../../assets/icon/techStack/js.png";
import ReactImg from "../../assets/icon/techStack/react-logo.png";

import ContentLeftArea from "./ContentLeftArea";
import ContentRightArea from "./ContentRightArea";
import ContentMiddleArea from "./ContentMiddleArea";

const ContentSection2 = () => {
  const [page, setPage] = useState(0);
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    const temp = [];
    for (let i = 1; i < contentData.length + 1; i++) {
      temp.push(i);
    }
    setPagination(temp);
  }, []);

  return (
    <>
      <ContentLeftArea
        number={contentData[page].number}
        title={contentData[page].title}
        subtitle={contentData[page].subtitle}
        img={contentData[page].img}
      />
      <ContentMiddleArea contentData={contentData[page]} />
      <ContentRightArea setPage={setPage} pagination={pagination} />
    </>
  );
};

const contentData = [
  {
    number: "01.",
    title: "프론트엔드 개발",
    subtitle: "FRONTEND",
    concept: "완성된 UI 디자인을 따라 프론트엔드 개발을 진행",
    desc: `완성된 UI 디자인을 따라 프론트 팀원과 역할을 분담하여 프론트엔드 개발을 진행하였다. 단, 그대로 UI 디자인을 따르기 보다 핸드폰에 출력되는 모습을 계속해서 확인하며 서체 크기, 버튼 사이즈 등 수정할 수 있는 부분은 자체적으로 수정한다. 또한 기능적으로 문제가 있는 부분에 대해서는 디자인, 기획, 프론트 팀원들이 모여 회의를 통해 의논하여 개선했다.`,
    process: `로그인 / 회원가입 페이지 > 내 명함 페이지 > 내 명함 수정 페이지 > 명함첩 페이지 > 커뮤니티 (일반/전공 게시판) 페이지 > 게시글 수정 페이지 > 진행 중`,
    font: "Noto Sans KR",
    techStackImg: [
      { src: HtmlImg, size: "11%" },
      { src: CssImg, size: "8%" },
      { src: JsImg, size: "11.5%" },
      { src: ReactImg, size: "10%" },
    ],
    img: { src: ScreenImg, size: "55%" },
  },
  {
    number: "02.",
    title: "로고 디자인",
    subtitle: "GRAPHIC DESIGN",
    concept:
      "팀명이자 어플리케이션 이름인 'flint'의 의미를 살릴 수 있는 방향으로 디자인을 진행",
    desc: `해당 로고는 플린트 즉 부싯돌로 인해 발생한 불꽃을 형상화한 것이다. 또한 Flint의 'F'의 모양을 불꽃에 담아내고자 하였다. 하단의 텍스트 로고의 경우 매끄러움과 각짐을 공존시킴으로써 각졌던 부싯돌이 다른 부싯돌들과 교류를 하며 점차 매끄러워져 간다는 의미를 담고자 하였다.`,
    process: `프로크리에이트를 활용한 로고 스케치 > 일러스트레이터를 활용한 구체화 작업`,
    design: `스케치의 경우 아이패드 어플리케이션 프로크리에이트를 활용하여 진행하였고 일러스트레이터를 통해 구체화를 진행하였다.`,
    designToolImg: [
      { src: IllustImg, size: "10.5%" },
      { src: ProcreateImg, size: "10%" },
    ],
    colors: [
      {
        name: "부싯돌로 인해 발생하는 불이라는 테마에 어울리고 다른 유사 어플리케이션과 구분이 될 수 있는 컬러를 선택하였다. 또한 채도가 높으면서 부드러운 컬러감을 선정하여 눈에 부담이 없으면서도 신세대적인 산뜻함을 첨가하고자 하였다.",
        hex: [],
      },
      { name: "Main Color", hex: ["#ff9810"] },
      {
        name: "Sub Color",
        hex: ["#ffa829", "#ffbe4a"],
      },
    ],
    img: { src: LogoImg, size: "80%" },
  },
  {
    number: "03.",
    title: "명함 디자인",
    subtitle: "UI DESIGN / GRAPHIC DESIGN",
    concept:
      "어플리케이션에서 사용되는 명함 UI 컴포넌트에 대해 각 학교별 특성을 나타낼 수 있는 디자인 진행",
    desc: `어플리케이션 내에서 자신에 대한 정보를 주고받을 수 있는 명함 UI 컴포넌트에 대한 디자인을 진행했다. 각 학교별 로고와 색상이 적용되더라도 어색함이 없으면서 가독성과 미적인 측면을 모두 고려할 수 있는 디자인을 진행했다. 총 4개의 앞면 디자인과 2개의 뒷면 디자인을 제시하여(하단 디자인 작업물 링크 참조) 최종 디자인을 선정하였다. 해당 디자인의 경우 개발 단계에서 플립 애니메이션을 적용하여 앞뒷면을 확인할 수 있다.`,
    process: `앞면 디자인 4개 진행 > 뒷면 디자인 2개 진행 > 최종 선정`,
    design: `피그마를 통해 명함의 앞면과 뒷면에 대한 디자인을 진행하였다.`,
    designToolImg: [{ src: FigmaImg, size: "6%" }],
    colors: [
      {
        name: "색상은 각 학교별 메인컬러가 적용된다.",
        hex: [],
      },
    ],
    img: { src: CardImg, size: "42%" },
  },
  {
    number: "04.",
    title: "하단 탭 아이콘 디자인",
    subtitle: "UI DESIGN / GRAPHIC DESIGN",
    concept: "어플리케이션의 특색을 나타낼 수 있는 디자인을 진행",
    desc: `어플리케이션의 하단 탭에 적용될 명합칩, 채팅방, 홈, 알람, 내정보에 대한 아이콘을 제작하고 UI 디자인을 진행했다. 어플리케이션 만의 특색있는 아이콘을 제작하기 위해 명함칩 부분의 아이콘에 가장 많은 신경을 쏟았다. 3가지 디자인 안에 대해 회의를 거쳐 최종 디자인이 선정되었다.`,
    process: `아이콘 3가지 안 디자인 > 아이콘 선정 회의 > UI 적용`,
    design: `일러스트레이터를 통해 아이콘을 디자인하고 피그마에 옮겨와 UI에 적용하였다.`,
    designToolImg: [
      { src: IllustImg, size: "10.5%" },
      { src: FigmaImg, size: "6%" },
    ],
    colors: [
      {
        name: "Active Color",
        hex: ["#ff9810", "#ffa829", "#ffbe4a"],
      },
      {
        name: "InActive Color",
        hex: ["#a0a0a0", "#c0c0c0", "#ccc"],
      },
    ],
    img: { src: IconImg, size: "30%" },
  },
];

export default ContentSection2;

import { useEffect, useState } from "react";

import UIImg from "../../assets/img/paran/ui-design.png";
import LogoImg from "../../assets/img/paran/logo.png";
import CharacterImg from "../../assets/img/paran/character.png";
import MainPageImg from "../../assets/img/paran/main-page.png";

import IllustImg from "../../assets/icon/techStack/illustrator-logo.png";
import XdImg from "../../assets/icon/techStack/xd-logo.png";
import ProcreateImg from "../../assets/icon/techStack/procreate-logo.png";
import CssImg from "../../assets/icon/techStack/css.png";
import HtmlImg from "../../assets/icon/techStack/html.svg";
import JsImg from "../../assets/icon/techStack/js.png";
import ReactImg from "../../assets/icon/techStack/react-logo.png";

import ContentLeftArea from "./ContentLeftArea";
import ContentRightArea from "./ContentRightArea";
import ContentMiddleArea from "./ContentMiddleArea";

const ContentSection3 = () => {
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
    title: "UI 디자인",
    subtitle: "UI DESIGN",
    concept:
      "깔끔하면서도 감각적인 디자인을 작업하고 개발자가 지속적으로 지식을 탐구하는 직업이기에 이러한 신세대적인 느낌을 전달하고자 하였다.",
    desc: `웹사이트의 메인 기능은 '커뮤니티' 시스템과 하루의 일정을 관리하는 '투두리스트'이다. 이러한 주 기능에 맞춰 로그인/회원가입, 메인페이지, 게시판, 게시글 상세보기, 게시글 작성, 검색창/검색결과, 마이페이지, 투두리스트 총 8가지의 페이지에 대한 UI 디자인을 진행하였다.`,
    process: `로그인 / 회원가입 UI 디자인 > 사이드바 UI 디자인 > 게시판 UI 디자인 > 게시글 상세보기 UI 디자인 > 게시글 작성 UI 디자인 > 검색창 / 검색 결과 UI 디자인 > 마이페이지 UI 디자인 > 투두리스트 UI 디자인 > 메인페이지 UI 디자인`,
    design: `전체적인 UI 작업은 XD를 통해 진행하였고 로고, 아이콘 등의 복잡한 그래픽 작업은 Illustrator를 이용하여 작업했다. 메인 컬러인 청보라색을 바탕으로 개발자들을 위한 커뮤니티 웹사이트라는 주제에 맞게 화면설계 당시 결정된 기능들을 바탕으로 사용자 편의성을 고려하여 디자인 스프린트를 진행했고 사용자 편의성 만큼 시원하고 깔끔한 느낌의 심미성도 함께 가져가고자 하였다.`,
    designToolImg: [
      { src: IllustImg, size: "10%" },
      { src: XdImg, size: "10%" },
    ],
    colors: [
      {
        name: "웹사이트의 깔끔하고 선명한 느낌을 위해 채도가 높은 컬러들을 위주로 선정하여 후보들을 28가지를 선정하였고 그 중 시원하면서도 신세대적인 느낌을 강하게 줄 수 있는 하단의 청보라 컬러들이 메인으로 선정되었다.",
        hex: ["#6c7bfa", "#4d6cef", "#3c65e5"],
      },
    ],
    font: "Gmarket Sans",
    img: { src: UIImg, size: "90%" },
  },
  {
    number: "02.",
    title: "로고 디자인",
    subtitle: "GRAPHIC DESIGN",
    concept:
      "사이트명이자 팀명인 'Cola'의 의미와 웹사이트의 분위기가 어울어지는 디자인으로 진행했다.",
    desc: `사이트명이자 팀명인 'Cola'는 영단어 Collaboration의 약자로 개발자 커뮤니티 내에서 협동하여 활동하자는 의미를 담고있다. 따라서 로고를 디자인함에 있어 협동을 의미하는 의미에서 이어지는 부드러운 느낌을 시각화하고자 하였으며, 후보 3가지 모두 연결되거나 이어지는 부드러운 느낌을 형상화 하고 있다. 후보들 중 가장 깔끔한 느낌을 자아내면서도 부드럽게 이어지는 느낌을 갖춘 후보가 최종적으로 선발되었다.`,
    process: `로고 구상 > 로고 스케치 > 일러스트레이터를 통한 로고 구체화`,
    design: `기본 구상은 스케치를 통해 진행되고 최종적인 작업은 일러스트레이터를 통해 이루어졌다.`,
    designToolImg: [{ src: IllustImg, size: "10%" }],
    colors: [
      {
        name: "색상은 웹사이트의 메인 컬러들 3개로 구성되었다.",
        hex: ["#6c7bfa", "#4d6cef", "#3c65e5"],
      },
    ],
    img: { src: LogoImg, size: "75%" },
  },
  {
    number: "03.",
    title: "캐릭터 디자인",
    subtitle: "DRAWING",
    concept:
      "'Cola'를 대표할 수 있고 친숙한 이미지의 동물 형상의 캐릭터로 디자인하고자 하였다.",
    desc: `'Cola'를 발음하면 연상되는 음료수인 콜라와 연계하여 콜라의 대표적인 브랜드인 코카콜라의 캐릭터인 북극곰을 메인으로 캐릭터 디자인 작업을 진행했다. 또한 동시에 'Cola'의 메인 색상인 청보라 색상을 강조하고자 북극곰 캐릭터의 머리 부분에 메인 색상의 모자를 씌워 귀여움과 동시에 사이트의 분위기를 강하게 표출하고자 했다. 이름의 경우 'Cola'에서 'C'와 'O'를 두번씩 반복하여 'Coco'라고 지음으로써 사람들이 캐릭터를 기억하고 부르는데 어려움이 없도록 하였다. 이러한 이름을 토대로 캐릭터의 목 부분에 'C'와 'O'의 형상을 지닌 장식을 추가하여 밑밑한 느낌을 줄이고자 했다.`,
    process: `캐릭터 구상 > 캐릭터 스케치 > 프로크리에이트를 통한 캐릭터 구체화 (디지털 드로잉)`,
    design: `기본 구상은 스케치를 통해 진행되고 최종적인 작업은 아이패드에서 드로잉 어플리케이션인 프로크리에이터를 통해 진행했다.`,
    designToolImg: [{ src: ProcreateImg, size: "10%" }],
    colors: [
      {
        name: "색상은 웹사이트의 메인 컬러들 3개로 구성되었다.",
        hex: ["#6c7bfa", "#4d6cef", "#3c65e5"],
      },
    ],
    img: { src: CharacterImg, size: "70%" },
  },
  {
    number: "04.",
    title: "메인페이지 웹 퍼블리싱",
    subtitle: "FRONTEND",
    concept: "UI 디자인을 바탕으로 웹퍼블리싱을 진행한다.",
    desc: `UI 디자인을 바탕으로 메인페이지와 투두리스트 페이지에 대해 React JS를 주 기술스택으로 웹퍼블리싱을 진행했다.`,
    process: `UI 디자인을 바탕으로 웹 퍼블리싱 진행`,
    techStackImg: [
      { src: HtmlImg, size: "11%" },
      { src: CssImg, size: "8%" },
      { src: JsImg, size: "11.5%" },
      { src: ReactImg, size: "10%" },
    ],
    img: { src: MainPageImg, size: "65%" },
  },
];
export default ContentSection3;

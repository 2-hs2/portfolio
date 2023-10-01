import { useEffect, useState } from "react";

import MainPageImg from "../../assets/img/mini/main-page.png";

import FigmaImg from "../../assets/icon/techStack/figma-logo.png";
import IllustImg from "../../assets/icon/techStack/illustrator-logo.png";
import ProcreateImg from "../../assets/icon/techStack/procreate-logo.png";
import CssImg from "../../assets/icon/techStack/css.png";
import HtmlImg from "../../assets/icon/techStack/html.svg";
import JsImg from "../../assets/icon/techStack/js.png";
import PythonImg from "../../assets/icon/techStack/python-logo.svg";
import MongoDBImg from "../../assets/icon/techStack/mongodb-logo.svg";

import ContentLeftArea from "./ContentLeftArea";
import ContentRightArea from "./ContentRightArea";
import ContentMiddleArea from "./ContentMiddleArea";

const ContentSection4 = () => {
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
    title: "디자인 / 개발",
    subtitle: "DESIGN / DEVELOPMENT",
    concept:
      "가벼운 마음으로 하루의 기분과 일정 그리고 일기를 담을 수 있는 사이트 제작",
    desc: `3일 동안 가볍게 진행한 미니 프로젝트로, 하루의 일상을 기록하는 웹사이트를 기획하고 개발하였다. 메인 페이지의 달력에서 이모티콘을 넣을 날짜를 선택 후 이모티콘을 클릭하면 해당 이모티콘으로 하루의 기분을 장식할 수 있다. 또한 투두리스트를 통해 하루의 일정을 체크하고 일기를 작성하여 하루를 마무리할 수 있다. 편집 페이지에서는 투두리스트와 일기의 내용을 수정 및 작성할 수 있어 한 번에 두가지 기능을 편리하게 다룰 수 있다.`,
    process: `이모티콘 제작 > UI 와이어프레임 > UI 디자인 > 메인 페이지 프론트 및 백엔드 개발 > 편집 페이지 프론트 및 백엔드 개발`,
    design: `사용자 편의성을 고려하여 페이지 이동수가 적도록 메인 페이지와 편집 페이지 총 2가지 페이지로 구성하여 디자인하였으며, 깔끔한 디자인에 이모티콘을 추가하여 아기자기한 느낌을 첨가하고자 하였다. 사용에 크게 어려움이 없도록 최대한 사용법을 안내하지 않아도 가시적이도록 UI를 구성하였다. 전체적인 UI 디자인은 피그마로 진행하였고, 구체적인 작업이 필요한 부분에 대해서는 일러스트레이터를 사용하였다. 이모티콘의 경우 프로크리에이트로 스케치를 진행한 후 일러스트레이터로 정리하였다.`,
    designToolImg: [
      { src: FigmaImg, size: "6%" },
      { src: IllustImg, size: "10.5%" },
      { src: ProcreateImg, size: "10%" },
    ],
    colors: [
      { name: "Main Color", hex: ["#6e7ce5"] },
      {
        name: "Emoji Color",
        hex: [
          "#FFE07D",
          "#F9BB91",
          "#FFC5C5",
          "#FF8888",
          "#A2E0AC",
          "#BBDCFF",
          "#DBC9F4",
          "#E5E5E5",
        ],
      },
    ],
    techStackImg: [
      { src: HtmlImg, size: "11%" },
      { src: CssImg, size: "8%" },
      { src: JsImg, size: "11.5%" },
      { src: PythonImg, size: "8%" },
      { src: MongoDBImg, size: "5%" },
    ],
    font: "Noto Sans KR",
    img: { src: MainPageImg, size: "92%" },
  },
];
export default ContentSection4;

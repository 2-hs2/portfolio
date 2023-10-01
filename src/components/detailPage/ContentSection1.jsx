import { useEffect, useState } from "react";

import AnalysisImg from "../../assets/img/labrador/analysis_src.png";
import CompareImg from "../../assets/img/labrador/compare_src.png";
import CompareType1Img from "../../assets/img/labrador/compare_area1.svg";
import CompareType2Img from "../../assets/img/labrador/compare_area2.svg";
import LabradorUIImg from "../../assets/img/labrador/labrador-ui.png";
import IVASUIImg from "../../assets/img/labrador/ivas-img.png";

import FigmaImg from "../../assets/icon/techStack/figma-logo.png";
import CssImg from "../../assets/icon/techStack/css.png";
import HtmlImg from "../../assets/icon/techStack/html.svg";
import JsImg from "../../assets/icon/techStack/js.png";
import ReactImg from "../../assets/icon/techStack/react-logo.png";
import TsImg from "../../assets/icon/techStack/ts-logo.svg";

import ContentLeftArea from "./ContentLeftArea";
import ContentRightArea from "./ContentRightArea";
import ContentMiddleArea from "./ContentMiddleArea";

const ContentSection = () => {
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
    title: "분석요약페이지",
    subtitle: "UI DESIGN / FRONTEND",
    concept:
      "기존 Labrador 사이트 내의 UI 디자인과 어울어지며 데이터를 한눈에 볼 수 있도록 한다.",
    desc: `Labrador 스캐너를 이용하여 소프트웨어 소스코드, zip 파일 또는 CLI를 분석한 결과들이 나오는 페이지로, 공통 취약점 등급 시스템인 CVSS의 두 가지 버전과 래브라도만의 등급 시스템인 LPP 총 세 가지 버전에 따라 소프트웨어 명세서인 SBOM, 취약점과 라이선스 수, patch가 필요한 취약점과 조치가 필요한 라이선스의 정보를 한 눈에 확인할 수 있다. 또한 헤더를 통해 다른 프로젝트들과 비교하는 '분석 비교 페이지'로의 이동과 비교 횟수를 확인할 수 있으며 해당 프로젝트에 대한 분석을 여러번 반복할 수 있다.`,
    process: `UI 디자인 > 구조 및 스타일 작업 > React 컴포넌트 작업 > React Hook을 이용한 데이터 적용 > UI 디자인 수정`,
    design: `피그마를 툴로 사용하여 분석요약 페이지의 헤더, SBOM 섹션, Risk 섹션, Patch 섹션, 정책 섹션의 디자인을 진행하였다. Patch 섹션과 Risk 섹션의 경우 여러 디자인 안들을 제시하여 프론트팀 내에서 팀원들과의 소통을 통해 결정하였으며 개발이 진행된 후 SBOM, Risk, Patch 섹션에 대한 2차 수정 또한 진행되어 더 나은 방향의 UI를 만들고자 하였다.`,
    designToolImg: [{ src: FigmaImg, size: "6%" }],
    colors: [
      { name: "Labrador Navy", hex: ["#214172"] },
      {
        name: "CVSS Color",
        hex: ["#cc0500", "#df3d03", "#f9a009", "#ffcb0d", "#cbcbcf"],
      },
      { name: "Component Color", hex: ["#97c9ab", "#8cacc8", "#8e8aac"] },
      { name: "Background Color", hex: ["#f4f6f9"] },
    ],
    font: "Noto Sans KR",
    techStackImg: [
      { src: HtmlImg, size: "11%" },
      { src: CssImg, size: "8%" },
      { src: JsImg, size: "11.5%" },
      { src: ReactImg, size: "10%" },
      { src: TsImg, size: "9%" },
    ],
    img: { src: AnalysisImg, size: "90%" },
  },
  {
    number: "02.",
    title: "분석비교페이지",
    subtitle: "UI DESIGN / FRONTEND",
    concept: `두 가지 타입으로 UI 디자인에 대한 다양한 안들을 제시하고 Labrador의 기존 UI 분위기와 어울리도록 진행한다.`,
    conceptImg1: CompareType1Img,
    conceptImg2: CompareType2Img,
    desc: `기존 분석 프로젝트와 타겟 분석 프로젝트를 비교하여 컴포넌트, 취약점, 라이선스에 대한 변경사항들을 비교해주는 페이지이다. 기존의 UI의 경우 분석요약 페이지에서의 팝업 형식이었지만 중요도가 높아짐에 따라 페이지로 따로 분리되어 디자인이 새롭게 리뉴얼되었다. 작동의 경우 분석할 프로젝트를 선택하고 비교하기 버튼을 누르면 해당 타겟 분석 프로젝트에 대해 기존 분석 프로젝트의 컴포넌트, 취약점, 라이선스 변화를 탭 영역에서 간단하게 확인할 수 있으며, 탭 영역에서 원하는 버튼 선택시 테이블 영역에 보다 자세한 정보들이 출력되는 형식으로 이루어진다.`,
    process: `1차 UI 디자인 > 2차 UI 디자인 > 최종 UI 디자인 > 퍼블리싱 > 로직 작업`,
    design: `피그마를 툴로 사용하여 1차적으로 두 가지 타입의 영역 스타일로 총 5가지 안을 제작하였으며 2차를 거쳐 최종적으로 3안의 셀렉터 영역과 4안의 탭 영역이 합쳐진 디자인이 선정되었다.`,
    designToolImg: [{ src: FigmaImg, size: "6%" }],
    colors: [
      { name: "Labrador Navy", hex: ["#214172"] },
      {
        name: "CVSS Color",
        hex: ["#cc0500", "#df3d03", "#f9a009", "#ffcb0d", "#cbcbcf"],
      },
      { name: "Component Color", hex: ["#97c9ab", "#8cacc8", "#8e8aac"] },
      { name: "Background Color", hex: ["#f4f6f9"] },
    ],
    font: "Noto Sans KR",
    techStackImg: [
      { src: HtmlImg, size: "11%" },
      { src: CssImg, size: "8%" },
      { src: JsImg, size: "11.5%" },
      { src: ReactImg, size: "10%" },
      { src: TsImg, size: "9%" },
    ],
    img: { src: CompareImg, size: "90%" },
  },
  {
    number: "03.",
    title: "Labrador UI 정리 및 수정",
    subtitle: "UI DESIGN / FRONTEND",
    concept: `None`,
    desc: `래브라도의 각 페이지들에 출력되는 UI와 공통 컴포넌트들에 대한 스타일 코드를 확인하여 그대로 피그마 내에 정리한다. 단순 정리 뿐만 아니라 코드 상에 중첩이나 출력이 적합하게 이루어지지 않는 UI 혹은 컴포넌트를 찾아 문제점을 지적하고 코드 반영 우선순위 중 '수정'과 '반영'에 해당하는 부분에 대한 코드 수정을 진행한다. 또한 박스, 토글 같은 공통 규격이 필요한 컴포넌트의 경우 React 컴포넌트화를 통해 통일화한다.`,
    process: `UI / 컴포넌트 정리 > 문제점에 대한 코멘트 추가 > '수정'과 '반영'에 대한 코드 수정 및 React 컴포넌트화`,
    design: `피그마를 툴로 사용하여 래브라도 내의 각 페이지별에 존재하는 UI와 공통 컴포넌트들을 정리하고 코멘트 툴을 이용하여 문제점이나 수정하면 좋을 부분에 대한 코멘트를 작성한다.`,
    designToolImg: [{ src: FigmaImg, size: "6%" }],
    colors: [{ name: "래브라도 내에서 사용되는 모든 컬러들", hex: [] }],
    font: "Noto Sans KR",
    techStackImg: [
      { src: HtmlImg, size: "11%" },
      { src: CssImg, size: "8%" },
      { src: JsImg, size: "11.5%" },
      { src: ReactImg, size: "10%" },
      { src: TsImg, size: "9%" },
    ],
    img: { src: LabradorUIImg, size: "95%" },
  },
  {
    number: "04.",
    title: "삼성화재 IVAS UI 디자인 수정",
    subtitle: "UI DESIGN",
    concept: `IVAS는 Labrador에서 파생된 삼성화재 버전이므로 Labrador와 비슷한 분위기를 유지하되, 삼성화재의 메인컬러를 추가하여 삼성화재의 느낌도 전달한다.`,
    desc: `기존 삼성화재 IVAS 개발이 기능 위주로 이루어지다 보니 UI 디자인 측면에서 다소 투박하고 비효율적인 배치의 모습을 확인할 수 있다. 따라서 이러한 측면을 개선하기 위해 헤더, 분석대상추가, 통합점검 셀렉터, 취약점 조치현황, 분석결과, 인풋, 뒤로가기/페이지 목록, 탭메뉴 총 8개의 UI의 디자인 수정을 진행하였다.`,
    process: `헤더 > 분석대상 추가 > 통합점검 셀렉터 > 취약점 조치현황 > 분석결과 > 인풋 > 뒤로가기/페이지목록 > 탭 메뉴`,
    design: `피그마를 툴로 사용하여 총 8가지의 UI에 대한 수정이 이루어졌다. 하나씩 순차적으로 진행하며 2차 3차 피드백을 받으며 나은 방향으로 UI 디자인을 수정하고자 하였다.`,
    designToolImg: [{ src: FigmaImg, size: "6%" }],
    colors: [
      { name: "IVAS Blue", hex: ["#3b5bdb", "#4f6bdf"] },
      {
        name: "CVSS Color",
        hex: ["#cc0500", "#df3d03", "#f9a009", "#ffcb0d", "#cbcbcf"],
      },
      {
        name: "Vulnerability Color",
        hex: ["#d61111", "#fca50e", "#2bc155", "#3d3e40"],
      },
      { name: "Background Color", hex: ["#f8f9fa"] },
    ],
    font: "Noto Sans KR",
    img: { src: IVASUIImg, size: "90%" },
  },
];
export default ContentSection;

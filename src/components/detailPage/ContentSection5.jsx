import { useEffect, useState } from "react";

import InfoImg from "../../assets/img/info/info.png";

import IllustImg from "../../assets/icon/techStack/illustrator-logo.png";

import ContentLeftArea from "./ContentLeftArea";
import ContentRightArea from "./ContentRightArea";
import ContentMiddleArea from "./ContentMiddleArea";

const ContentSection5 = () => {
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
    title: "인포그래픽스",
    subtitle: "GRAPHIC DESIGN",
    concept:
      "Perfume + Information = Perfumation > 향수에 대한 정보를 전달하기 위한 인포그래픽으로 향수의 은은하고 포근한 이미지를 전달하고자 했다.",
    desc: `향수의 전반적인 정보, 성별에 따른 인기 향수의 노트 분석, 노트별 조합, 계절에 따른 인기향수 분석, 낮과 밤에 따른 인기향수 노트 분석, 낮과 밤에 따른 인기순위 향그룹 비율에 대한 정보를 전달할 수 있는 데이터를 찾아 분석하고 이를 다양한 그래프를 활용하여 감각적으로 시각화함으로써 보는 사람으로 하여금 향수에 대한 지식을 쉽게 쌓을 수 있도록 작업했다.`,
    process: `1차 제작 및 피드백 > 2차 제작 및 피드백 > 3차 제작 및 피드백 > 4차 제작 및 피드백 > 5차 제작 및 피드백 > 6차 제작 및 피드백 > 최종 제작 및 발표`,
    design: `일러스트레이터를 활용하여 분석한 데이터를 바탕으로 향수라는 은은하고 포근한 테마에 맞춰 인포그래픽이 제작되었다. 또한 제목(Cooper Black), 소제목(Helvetica), 내용(Gmarket Sans)의 서체를 구분하여 디자인에 역동성을 부여하였다. 데이터 시각화는 Paralle Set Charts, Pie Charts, Heatmap, 100% Stack Bar Graphs, Bar Graphs를 활용하여 향수라는 컨셉에 변형해 작업했다.`,
    designToolImg: [{ src: IllustImg, size: "10.5%" }],
    colors: [
      {
        name: "색상의 경우 메인컬러는 향수의 은은함과 포근함을 나타내기 위해 채도가 낮은 연한 하늘색을 선택하였고, 향수의 노트그룹 12가지의 향 설명에 알맞은 컬러를 선정하였다.",
        hex: [],
      },
      { name: "Main Color", hex: ["#b4d3f0"] },
      {
        name: "Perfume Color",
        hex: [
          "#ffd976",
          "#ffb078",
          "#ef8484",
          "#ffcad5",
          "#e5e580",
          "#a9d380",
          "#a7e3d4",
          "#74b28f",
          "#c5b2e8",
          "#8187cc",
          "#7caed9",
          "#87cde0",
        ],
      },
    ],
    font: "Cooper Black / Helvetica / Gmarket Sans",
    img: { src: InfoImg, size: "90%" },
  },
];

export default ContentSection5;

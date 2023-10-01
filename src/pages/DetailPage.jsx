import { useNavigate, useParams } from "react-router-dom";

import { ReactComponent as ArrowSvg } from "../assets/icon/arrow_black.svg";

import TitleSection from "../components/detailPage/TitleSection";
import ContentSection1 from "../components/detailPage/ContentSection1";
import ContentSection2 from "../components/detailPage/ContentSection2";
import ContentSection3 from "../components/detailPage/ContentSection3";
import ContentSection4 from "../components/detailPage/ContentSection4";
import ContentSection5 from "../components/detailPage/ContentSection5";
import LinkSection from "../components/detailPage/LinkSection";

const DetailPage = () => {
  const param = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className="container3">
        <ArrowSvg className="arrow-icon" onClick={() => navigate("/index")} />
        <TitleSection index={param.indexId} />
      </div>
      <div className="container4">
        {param.indexId == 1 && <ContentSection1 />}
        {param.indexId == 2 && <ContentSection2 />}
        {param.indexId == 3 && <ContentSection3 />}
        {param.indexId == 4 && <ContentSection4 />}
        {param.indexId == 5 && <ContentSection5 />}
      </div>
      <div className="container5">
        <LinkSection LinkData={LinkData[param.indexId - 1]} />
      </div>
    </>
  );
};

const LinkData = [
  [
    {
      number: "01.",
      type: "LINK",
      desc: ["UI 디자인 작업물"],
      link: "https://www.figma.com/file/wPyvTnfY3nNq3UDALngB8E/labrador-ui?type=design&node-id=0%3A1&mode=design&t=Wp7g5qND5cr0JOhn-1",
    },
    {
      number: "02.",
      type: "PDF",
      desc: ["인턴 최종 발표", "'Wrap-Up' 자료"],
      link: "https://drive.google.com/file/d/16Ezy5y1aLDvElMocrznNWKuIKzVwwigD/view?usp=drive_link",
    },
  ],
  [
    {
      number: "01.",
      type: "GITHUB",
      desc: ["Flint GitHub 주소"],
      link: "https://github.com/Flint-org/Flint-Front",
    },
    {
      number: "02.",
      type: "LINK",
      desc: ["그래픽 디자인 작업물"],
      link: "https://www.figma.com/file/a1qewhiny5P5xuX64HAs8P/flint-design?type=design&node-id=1%3A2707&mode=design&t=04LZLETciACsdk8s-1",
    },
    {
      number: "03.",
      type: "LINK",
      desc: ["UI 와이어프레임", "및 디자인 작업물"],
      link: "https://www.figma.com/file/6CX5G7E8KAoPAmDA1miVlG/flint-ui?type=design&node-id=0%3A1&mode=design&t=04LZLETciACsdk8s-1",
    },
  ],
  [
    {
      number: "01.",
      type: "LINK",
      desc: ["UI 디자인 작업물"],
      link: "https://xd.adobe.com/view/1e444c23-ed9c-4272-8da1-f6441741554d-4b17/",
    },
    {
      number: "02.",
      type: "PDF",
      desc: ["파란학기제의 중간발표인", "'중간발표회' 자료"],
      link: "https://drive.google.com/file/d/1St6e_hoHL8LMwJ4RhMiZ0ChGbvrxP-oj/view?usp=sharing",
    },
    {
      number: "03.",
      type: "PDF",
      desc: ["파란학기제의 최종발표인", "'성과발표회' 자료"],
      link: "https://drive.google.com/file/d/1ROT682ACHS08XL5N6hCrYxa7jzplxzyh/view?usp=sharing",
    },
  ],
  [
    {
      number: "01.",
      type: "VIDEO",
      desc: ["사이트 사용 영상"],
      link: "https://drive.google.com/file/d/1V8IAjI6ofBIn95JnZLYZqPjuu7cTC0qV/view?usp=sharing",
    },
    {
      number: "02.",
      type: "LINK",
      desc: ["UI 디자인 작업물"],
      link: "https://www.figma.com/file/vUSD0d5V9ZmOVf3trMeK6p/%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-UI?type=design&node-id=4%3A170&mode=design&t=bS88ZbhqfeqQYKHg-1",
    },
    {
      number: "03.",
      type: "GITHUB",
      desc: ["작업물 GitHub 주소"],
      link: "https://github.com/2-hs2/todo",
    },
  ],
  [
    {
      number: "01.",
      type: "LINK",
      desc: ["ETC. 디자인 포트폴리오"],
      link: "https://drive.google.com/file/d/1QJe0ISzkZcXvezfI1ylhRRQ8jg8IUI9-/view?usp=sharing",
    },
    {
      number: "02.",
      type: "LINK",
      desc: ["인포그래픽스 작업물"],
      link: "https://assets.adobe.com/id/urn:aaid:sc:AP:f697e337-ee39-4404-b700-0db72508a1e5?view=published",
    },
    {
      number: "03.",
      type: "PDF",
      desc: ["인포그래픽스 최종발표 자료"],
      link: "https://drive.google.com/file/d/1QJe0ISzkZcXvezfI1ylhRRQ8jg8IUI9-/view?usp=sharing",
    },
  ],
];

export default DetailPage;

import { useNavigate, useParams } from "react-router-dom";

import { ReactComponent as ArrowSvg } from "../assets/icon/arrow_black.svg";

import TitleSection from "../components/detailPage/TitleSection";
import ContentSection1 from "../components/detailPage/ContentSection1";
import ContentSection3 from "../components/detailPage/ContentSection3";
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
        {param.indexId == 1 && <ContentSection1 index={param.indexId} />}
        {param.indexId == 3 && <ContentSection3 index={param.indexId} />}
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
  [],
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
];

export default DetailPage;

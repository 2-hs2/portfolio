import { useNavigate, useParams } from "react-router-dom";

import { ReactComponent as ArrowSvg } from "../assets/icon/arrow_black.svg";

import TitleSection from "../components/detailPage/TitleSection";
import ContentSection1 from "../components/detailPage/ContentSection1";

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
      </div>
    </>
  );
};

export default DetailPage;

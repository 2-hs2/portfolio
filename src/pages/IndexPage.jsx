import { ReactComponent as ArrowSvg } from "../assets/icon/arrow_black.svg";

import "../styles/indexPage.scss";

const IndexPage = () => {
  return (
    <div className="container">
      <div className="back-btn-wrap">
        <ArrowSvg className="arrow-icon" />
      </div>
    </div>
  );
};

export default IndexPage;

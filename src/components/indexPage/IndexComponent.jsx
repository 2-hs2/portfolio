import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { ReactComponent as ArrowSvg } from "../../assets/icon/arrow_black.svg";

const IndexComponent = ({ data, setBackgroundColor }) => {
  const navigate = useNavigate();

  const [hover, setHover] = useState(false);

  return (
    <div
      className="index-wrap"
      onClick={() => navigate(`/index/${data?.link}`)}
      onMouseOver={() => {
        setBackgroundColor("#000");
        setHover(true);
      }}
      onMouseLeave={() => {
        setBackgroundColor("#fff");
        setHover(false);
      }}
    >
      <div className="left-wrap">
        <span className="number">{data?.number}</span>
        <span className="title">{data?.title}</span>
      </div>
      <div className="right-wrap">
        <div className="content-wrap">
          <div className="period">{data?.period}</div>
          <div className="middle-line">-</div>
          <div className="description">{data?.description}</div>
        </div>
        {hover && <ArrowSvg className="arrow-icon-2" />}
      </div>
    </div>
  );
};

export default IndexComponent;

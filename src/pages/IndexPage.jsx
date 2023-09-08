import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { ReactComponent as ArrowSvg } from "../assets/icon/arrow_black.svg";

const IndexPage = () => {
  const navigate = useNavigate();

  // container 배경색 지정 state
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  return (
    <div className="container2" style={{ backgroundColor: backgroundColor }}>
      <div className="arrow-wrap">
        <ArrowSvg
          className="arrow-icon"
          onClick={() => navigate("/")}
          onMouseOver={() => setBackgroundColor("#000")}
          onMouseLeave={() => setBackgroundColor("#fff")}
        />
      </div>
    </div>
  );
};

export default IndexPage;

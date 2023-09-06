import { useCallback, useEffect, useState } from "react";

import { ReactComponent as ArrowSvg } from "../assets/icon/arrow_black.svg";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  // 마우스 x,y 좌표를 담는 state
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // 마우스 움직일 때 x,y 좌표 변경하는 함수
  const setMousePosition = useCallback((e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  }, []);

  useEffect(() => {}, []);

  return (
    <div className="container" onMouseMove={setMousePosition}>
      <div to={"index"} className="arrow-wrap">
        <ArrowSvg className="arrow-icon" onClick={() => navigate("index")} />
      </div>
      <div
        className="circle"
        style={{
          top: mouseY,
          left: mouseX,
        }}
      ></div>
      <div className="title">2023</div>
      <div className="title">FRONTEND</div>
      <div className="title">PORTFOLIO</div>
      <div className="content1">2023 PORFOLIO</div>
      <div className="content2">
        Ajou Univ.
        <br />
        Digital Media & Software
        <br />
        Hyeseung Lee
      </div>
    </div>
  );
};

export default StartPage;

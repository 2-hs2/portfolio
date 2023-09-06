import { useCallback, useState } from "react";

import { ReactComponent as ArrowSvg } from "../assets/icon/arrow_black.svg";

const StartPage = () => {
  // 마우스 x,y 좌표를 담는 state
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // 마우스 움직일 때 x,y 좌표 변경하는 함수
  const setMousePosition = useCallback((e) => {
    setX(e.clientX);
    setY(e.clientY);
  }, []);

  return (
    <div className="container" onMouseMove={setMousePosition}>
      <div className="arrow-wrap">
        <ArrowSvg className="arrow-icon" />
      </div>
      <div
        className="circle"
        style={{
          top: y,
          left: x,
        }}
      ></div>
      <div className="title">2023</div>
      <div className="title">FRONTEND</div>
      <div className="title">PORTFOLIO</div>
    </div>
  );
};

export default StartPage;

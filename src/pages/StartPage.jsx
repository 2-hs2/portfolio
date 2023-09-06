import { useCallback, useState } from "react";

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
      <div
        className="circle"
        style={{
          top: y,
          left: x,
        }}
      ></div>
    </div>
  );
};

export default StartPage;

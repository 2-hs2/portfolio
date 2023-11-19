import styled from "styled-components";
import { ReactComponent as UpArrowSvg } from "../../assets/icon/up-arrow.svg";

const PageUpBtn = () => {
  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BtnWrap onClick={MoveToTop}>
      <UpArrowSvg style={{ width: "35%" }} />
    </BtnWrap>
  );
};

export default PageUpBtn;

const BtnWrap = styled.div`
  cursor: pointer;
  position: fixed;
  z-index: 100;
  bottom: 5vh;
  right: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5vw;
  height: 3.5vw;
  background-color: #000;
  border-radius: 50%;
  opacity: 0.5;
  &:hover {
    opacity: 1;
    transition: 0.3s;
  }
`;

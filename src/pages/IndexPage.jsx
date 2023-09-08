import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowSvg } from "../assets/icon/arrow_black.svg";

const IndexPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container2">
      <div className="arrow-wrap">
        <ArrowSvg className="arrow-icon" onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default IndexPage;

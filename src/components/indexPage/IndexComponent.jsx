import { useNavigate } from "react-router-dom";

const IndexComponent = ({ data, setBackgroundColor }) => {
  const navigate = useNavigate();

  return (
    <div
      className="index-wrap"
      onClick={() => navigate(`/index/${data?.link}`)}
      onMouseOver={() => setBackgroundColor("#000")}
      onMouseLeave={() => setBackgroundColor("#fff")}
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
      </div>
    </div>
  );
};

export default IndexComponent;

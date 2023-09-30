const LinkSection = ({ LinkData }) => {
  return (
    <div className="link-wrap">
      {LinkData.map((data) => {
        return (
          <a
            key={data.number}
            className="content-wrap"
            href={data.link}
            target="_blank"
          >
            <div className="number">{data.number}</div>
            <div className="type">{data.type}</div>
            <div className="middle-line"></div>
            <div className="desc">{data.desc}</div>
            <div className="click-btn">
              <span className="btn-text">CLICK</span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default LinkSection;

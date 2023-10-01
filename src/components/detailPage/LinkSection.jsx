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
            {data.desc.map((d, index) => (
              <div key={index} className="desc">
                {d}
              </div>
            ))}
          </a>
        );
      })}
    </div>
  );
};

export default LinkSection;

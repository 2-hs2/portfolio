const ContentLeftArea = ({ number, title, subtitle, img }) => {
  return (
    <div className="left-wrap">
      <div className="page-number">{number}</div>
      <div className="img-wrap">
        <img src={img} className="img" />
      </div>
      <div className="left-bottom-wrap">
        <div className="page-title">{title}</div>
        <div className="page-subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default ContentLeftArea;

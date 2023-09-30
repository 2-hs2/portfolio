const ContentLeftArea = ({ number, title, subtitle, img }) => {
  return (
    <div className="left-wrap">
      <div className="top-wrap">
        <div className="page-number">{number}</div>
        <div className="page-title">{title}</div>
        <div className="page-subtitle">{subtitle}</div>
      </div>
      <div className="img-wrap">
        <img src={img.src} className="img" style={{ width: img.size }} />
      </div>
    </div>
  );
};

export default ContentLeftArea;

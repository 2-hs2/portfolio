const ContentLeftArea = ({ number, title, subtitle }) => {
  return (
    <div className="left-wrap">
      <div className="page-number">{number}</div>
      <div className="left-bottom-wrap">
        <div className="page-title">{title}</div>
        <div className="page-subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default ContentLeftArea;

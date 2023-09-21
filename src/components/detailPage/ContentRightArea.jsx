const ContentRightArea = ({ setPage, pagination }) => {
  return (
    <div className="right-wrap">
      {pagination.map((num, index) => {
        return (
          <div key={num} className="page-number" onClick={() => setPage(index)}>
            {num}
          </div>
        );
      })}
    </div>
  );
};

export default ContentRightArea;

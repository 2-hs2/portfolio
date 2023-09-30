const ContentMiddleArea = ({ contentData }) => {
  return (
    <div className="middle-wrap">
      <div className="contents-wrap">
        <div className="content-wrap">
          <div className="title">Concept.</div>
          {contentData.title === "분석비교페이지" && (
            <div className="concept-img-wrap">
              <img className="concept-img" src={contentData.conceptImg1} />
              <img className="concept-img" src={contentData.conceptImg2} />
            </div>
          )}
          <div className="content">{contentData?.concept}</div>
        </div>
        <div className="content-wrap">
          <div className="title">Description.</div>
          <div className="content">{contentData?.desc}</div>
        </div>
        <div className="content-wrap">
          <div className="title">Process.</div>
          <div className="content">{contentData?.process}</div>
        </div>
        {contentData?.design && (
          <div className="content-wrap">
            <div className="title">Design.</div>
            <div className="content">{contentData?.design}</div>
            <div className="sub-title">Design Tool -</div>
            <img src={contentData?.designToolImg} className="design-tool-img" />
            <div className="sub-title">Color -</div>
            {contentData?.colors.map((color) => {
              return (
                <>
                  <div key={color.name} className="content">
                    {color.name}
                  </div>
                  <div className="circle-wrap">
                    {color.hex.map((h) => (
                      <div
                        key={h[0]}
                        className="circle"
                        style={{ background: h }}
                      ></div>
                    ))}
                  </div>
                </>
              );
            })}
            <div className="sub-title">Font -</div>
            <div className="content">{contentData?.font}</div>
          </div>
        )}
        {contentData?.techStackImg && (
          <div className="content-wrap">
            <div className="title">Tech Stack.</div>
            {contentData?.techStackImg.map((img) => (
              <img
                key={img}
                src={img.src}
                style={{ width: img.size }}
                className="tech-stack-img"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentMiddleArea;

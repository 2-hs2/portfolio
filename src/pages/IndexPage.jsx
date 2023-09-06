import { Link, useNavigate } from "react-router-dom";

const IndexPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <Link to={"1"}>목차1</Link>
      <Link to={"2"}>목차2</Link>
      <Link to={"3"}>목차3</Link>
    </div>
  );
};

export default IndexPage;

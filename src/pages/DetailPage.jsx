import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();

  return <button onClick={() => navigate(-1)}>뒤로가기</button>;
};

export default DetailPage;

import { BrowserRouter, Route, Routes } from "react-router-dom";

import StartPage from "./pages/StartPage";
import IndexPage from "./pages/IndexPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/index" element={<IndexPage />} />
        <Route path="/index/:indexId" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

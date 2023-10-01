import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "./index.css";
import "./styles/startPage.scss";
import "./styles/indexPage.scss";
import "./styles/detailPage.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

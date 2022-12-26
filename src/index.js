import React from "react";
import ReactDOM from "react-dom/client";
import App from "./blocks/app/App";

import "./scss/global.scss";
import "./scss/reset.scss";
import "./scss/fonts.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

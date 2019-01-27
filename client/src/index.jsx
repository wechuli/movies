import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/custom.css";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

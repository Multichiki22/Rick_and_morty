import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import  {BrowserRouter} from "react-router-dom";
const deployDirection = process.env.REACT_APP_DEPLOY_URL

ReactDOM.render(
  <BrowserRouter basename={`/${deployDirection}`}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

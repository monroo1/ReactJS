import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components";
import { Main } from "./components";
import "./normilize.css";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);

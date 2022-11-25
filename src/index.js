import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <ToastContainer></ToastContainer>
    </HashRouter>
  </React.StrictMode>
);

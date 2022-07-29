import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import MainLayout from "./components/MainLayout";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MainLayout>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </MainLayout>
  </React.StrictMode>
);

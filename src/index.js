import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { RecoilRoot } from "recoil";
import MainLayout from "./components/MainLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <MainLayout>
        <App />
      </MainLayout>
    </RecoilRoot>
  </React.StrictMode>
);

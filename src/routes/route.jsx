import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;

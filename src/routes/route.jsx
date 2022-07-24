import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/DetailPage/Detail";
import Search from "../pages/SearchPage/SearchIndex";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:recipeId/detail" element={<Detail />} />
        <Route path="/fridge" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Main from '../pages/Main';
import Detail from "../pages/Detail";
import Search from "../pages/Search";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        {/* <Route path='/search' element={<Search />} /> */}
        <Route path="/:recipeId/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;

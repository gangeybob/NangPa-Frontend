import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/MainPage/Main";
import Detail from "../pages/DetailPage/Detail";
import Search from "../pages/SearchPage/SearchIndex";
import MyPage from "../pages/MyPage/MyPage";
import Community from "../pages/CommunityPage/Community";
import Frige from "../pages/FrigePage/Frige";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:recipeId/detail" element={<Detail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/community" element={<Community />} />
        <Route path="/frige" element={<Frige />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;

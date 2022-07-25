import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/MainPage/Main";
import Detail from "../pages/DetailPage/Detail";
import Search from "../pages/SearchPage/Search";
import MyPage from "../pages/MyPage/MyPage";
import Community from "../pages/CommunityPage/Community";
import Frige from "../pages/FrigePage/Frige";
import MyFrige from "../pages/MyFrigePage/MyFrige";
import ResultList from "../pages/resultList";

const RootRoute = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:recipeId/detail" element={<Detail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/community" element={<Community />} />
        <Route path="/frige" element={<Frige />} />
        <Route path="/myfrige" element={<MyFrige />} />
        <Route path="/resultlist" element={<ResultList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Detail from '../pages/DetailPage/Detail';
import Search from '../pages/SearchPage/SearchIndex';
import MyPage from '../pages/MyPage/MyPage';
import Community from '../pages/CommunityPage/Community';

const RootRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/:recipeId/detail' element={<Detail />} />
                <Route path='/fridge' element={<Search />} />
                <Route path='/mypage' element={<MyPage />} />
                <Route path='/community' element={<Community />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RootRoute;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Search from '../pages/SearchPage/SearchIndex';

const RootRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/fridge' element={<Search />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RootRoute;

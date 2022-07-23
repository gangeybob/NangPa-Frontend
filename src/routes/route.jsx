import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Main from '../pages/Main';
import Search from '../pages/Search';

const RootRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Search />} />
                {/* <Route path='/search' element={<Search />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default RootRoute;

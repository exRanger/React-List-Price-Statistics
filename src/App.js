import {
    RouterProvider,
    Route, 
    createBrowserRouter,
    createRoutesFromElements,
    Outlet
} from 'react-router-dom';
import React, {createContext} from 'react';
import Header from './components/Header';
import {Card, Home, EmptyPage} from './pages';
import './scss/app.scss';

export const SearchContext = createContext('');

function App() {
    const [searchValue, setSearchValue] = React.useState('');
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Root/>}>
                <Route path='/' index element={<Home searchValue={searchValue}/>}/>
                <Route path="/card" element={<Card/>}/>
                <Route path="*" element={<EmptyPage/>}/>
            </Route>
        )
    );
    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue}}>
            <div className="wrapper">
                <RouterProvider router={router}/>
            </div>
        </SearchContext.Provider>
    );
}

const Root = (props) => <>
    <div className="wrapper">
        {/* Always show the 'Header' component on any given route */}
        <Header {...props}/>
        <Outlet/> 
    </div>
</>;

export default App;

import {
    RouterProvider,
    Route, 
    createBrowserRouter,
    createRoutesFromElements,
    Outlet
} from 'react-router-dom';
import Header from './components/Header';
import {Card, Home, EmptyPage} from './pages';
import './scss/app.scss';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Root/>}>
                <Route path='/' index element={<Home/>}/>
                <Route path="/card" element={<Card/>}/>
                <Route path="*" element={<EmptyPage/>}/>
            </Route>
        )
    );
    return (
        <>
            <div className="wrapper">
                <RouterProvider router={router}/>
            </div>
        </>
    );
}

const Root = () => <>
    <div className="wrapper">
        {/* Always show the 'Header' component on any given route */}
        <Header/>
        <Outlet/> 
    </div>
</>

export default App;

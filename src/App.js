import {
    RouterProvider,
    Route, 
    createBrowserRouter,
    createRoutesFromElements,
    Routes,
    Link,
    Outlet
} from 'react-router-dom';
import Header from './components/Header/Header';
import Card from './pages/Card';
import EmptyPage from './pages/EmpyPage';
import Home from './pages/Home';
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
                <RouterProvider {...{router}}/>
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

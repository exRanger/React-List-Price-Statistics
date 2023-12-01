import {
    RouterProvider,
    Route, 
    createBrowserRouter,
    createRoutesFromElements,
    Routes
} from 'react-router-dom';
import Header from './components/Header/Header';
import Card from './pages/Card';
import Home from './pages/Home';
import './scss/app.scss';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
                <Route>
                    <Route path='/' index element={<Home/>} />
                    <Route path="/card" element={<Card/>} />
                </Route>
        )
    );
    return (
        <>
            <div className="wrapper">
                <Header/>
                <RouterProvider {...{router}}/>
            </div>
        </>
    );
}

const Root = () => {
    return <Header />;
}

export default App;

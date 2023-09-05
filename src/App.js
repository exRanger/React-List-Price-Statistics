import {
    RouterProvider,
    Route, 
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom';
import Header from './components/Header/Header';

import Card from './pages/Card';
import Home from './pages/Home';
import './scss/app.scss';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Home/>}>
                <Route path="/card" element={<Card/>} />
            </Route>
        )
    );
    return (
        <>
            <div className="wrapper">
                <Header />
                <RouterProvider {...{router}}/>
            </div>
        </>
    );
}

export default App;

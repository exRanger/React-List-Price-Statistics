import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from './App';

import './index.scss';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

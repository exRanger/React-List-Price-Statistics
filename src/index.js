import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from './redux/store';
import { Provider } from 'react-redux';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

const ProvidedApp = <Provider store={store}>
        <App/>
    </Provider>;

root.render(ProvidedApp);

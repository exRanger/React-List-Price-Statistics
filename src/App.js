import {useEffect, useState} from 'react';
import Categories from './components/Categories/Categories';
import ContentLoader from './components/ContentLoader';
import Header from './components/Header/Header';
import PizzaItem from './components/PizzaItem/PizzaItem';
import Sort from './components/Sort/Sort';
import Controller from './getDataApi/apiController';
import './scss/app.scss';

function App() {
    const [pizzas, setPizzas] = useState([]);
    useEffect(() => (
    (async () => {
        const pizzas = await Controller.load();
        setPizzas(pizzas);
    })()), []);
    
    return (
        <>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories />
                            <Sort />
                        </div>
                        <h2 className="content__title">All our products</h2>
                        <div className="content__items">             
                            {pizzas.map((props, index) => <ContentLoader {...props} key={`el${index}}`}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;

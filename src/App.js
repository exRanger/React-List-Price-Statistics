import {useEffect, useState} from 'react';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import PizzaItem from './components/PizzaItem/PizzaItem';
import Sort from './components/Sort/Sort';
import Controller from './getDataApi/apiController';
import './scss/app.scss';
import Loader from './components/Loader';

function App() {
    const [pizzas, setPizzas] = useState([]);
    const [loadOff , setLoadOff] = useState(false);
    useEffect(() => {
        (async () => {
            const pizzas = await Controller.load();
            setPizzas(pizzas);
            setLoadOff(true);
        })();
    }, []);
    
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
                            {loadOff ? 
                                pizzas.map((props, index) => <PizzaItem {...props} key={`el${index}}`}/>) :
                                <Loader countOfLoad={6}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;

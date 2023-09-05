import {useEffect, useState} from 'react';
import Controller from '../getDataApi/apiController';
import Categories from '../components/Categories/Categories';
import PizzaItem from '../components/PizzaItem/PizzaItem';
import Sort from '../components/Sort/Sort';
import Loader from '../components/Loader';

import '../scss/app.scss';

export default function Home() {
    const [pizzas, setPizzas] = useState([]);
    const [loadOff , setLoadOff] = useState(false);
    useEffect(() => {(
        async () => {
            const pizzas = await Controller.load();
            setPizzas(pizzas);
            setLoadOff(true);
        })();
    }, []);  
    return (
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
    )
}

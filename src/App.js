import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import PizzaItem from './components/PizzaItem/PizzaItem';
import Sort from './components/Sort/Sort';
import './scss/app.scss';

import pizzas from './assets/pizzas.json'

function App() {
    return (
        <>
            {/* <PriceBlock/> */}
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories />
                            <Sort />
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            {pizzas.map((item, index) => {
                                return <PizzaItem
                                    key={index}
                                    {...item}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;

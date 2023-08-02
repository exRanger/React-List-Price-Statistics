import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import PizzaItem from './components/PizzaItem/PizzaItem';
import Sort from './components/Sort/Sort';
import './scss/app.scss';

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
                            <PizzaItem
                                title="classic"
                                type="large"
                                size={40}
                                price="15"
                            />
                            <PizzaItem
                                title="vegetarian"
                                type="thin"
                                size={22}
                                price="21"
                            />
                            <PizzaItem
                                title="mexican"
                                type="large"
                                size={25}
                                price="19"
                            />
                            <PizzaItem
                                title="peperoni"
                                type="large"
                                size={35}
                                price="24"
                            />
                            <PizzaItem />
                            <PizzaItem />
                            <PizzaItem />
                            <PizzaItem />
                            <PizzaItem />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;

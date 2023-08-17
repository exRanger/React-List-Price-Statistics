import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import PizzaItem from './components/PizzaItem/PizzaItem';
import Sort from './components/Sort/Sort';
import './scss/app.scss';

function App() {
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
                            <PizzaItem
                                title="classic"
                                type="large"
                                size={40}
                                price="15"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;

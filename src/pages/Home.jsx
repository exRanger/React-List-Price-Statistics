import {useEffect, useState, useLayoutEffect} from 'react';
import Controller from '../getDataApi/apiController';
import Categories from '../components/Categories/Categories';
import PizzaItem from '../components/PizzaItem/PizzaItem';
import Sort from '../components/Sort/Sort';
import Loader from '../components/Loader';

import '../scss/app.scss';

const CATEGORY_SEARCH_PARAM = 'category';
const SORTING_SEARCH_PARAM = 'sortBy';

export default function Home() {
    const [pizzas, setPizzas] = useState([]);
    const [loadOff , setLoadOff] = useState(false);
    const [categoryId, setCategoryId] = useState(null);
    const [sort, setSort] = useState({
        isSortClicked: false,
        chosenItem: false,
        sortItemName: null
    });

    const setCategoryHandler = (e) => {
        const {activeId} = e.target.dataset;
        setCategoryId(activeId ?? null);
    };
    
    useEffect(() => {(
        async () => {
            const categoryIdState = categoryId !== null ? `?${CATEGORY_SEARCH_PARAM}=${categoryId}` : null;
            const sortValueState = sort.sortItemName !== null ? `${categoryIdState ? '&' : '?'}${SORTING_SEARCH_PARAM}=${sort.sortItemName}` : null;
            console.log(sort);
            setLoadOff(false);
            const pizzas = await Controller.load(categoryIdState, sortValueState);
            setPizzas(pizzas);
            setLoadOff(true);
        })();
    }, [categoryId, sort.sortItemName]);  

    return (
        <div className="content">
            <div className="contentContainer">
                <div className="contentContainer__top">
                    <Categories value={categoryId} setCategoryHandler={setCategoryHandler}/>
                    <Sort sort={sort} setSort={setSort} />
                </div>
                <h2 className="contentContainer__title">All our products</h2>
                    <div className="contentContainer__items">
                        {loadOff ? 
                            pizzas.map((props, index) => <PizzaItem {...props} key={`el${index}}`}/>) :
                            <Loader countOfLoad={6}/>
                        }
                    </div>    
            </div>
        </div>
    );
}

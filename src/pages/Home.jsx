import {useEffect, useState, useLayoutEffect} from 'react';
import Controller from '../getDataApi/apiController';
import Categories from '../components/Categories/Categories';
import PizzaItem from '../components/PizzaItem/PizzaItem';
import Sort from '../components/Sort/Sort';
import Loader from '../components/Loader';

import '../scss/app.scss';
import Pagination from '../components/Pagination/Index';

// to consts
const CATEGORY_SEARCH_PARAM = 'category';
const SORTING_SEARCH_PARAM = 'sortBy';
const SEARCH_PARAM = 'search';
const PAGE_COUNT_PARAM = 'page';
const LIMIT = 'limit=4';

export default function Home({searchValue}) {
    const [pizzas, setPizzas] = useState([]);
    const [loadOff , setLoadOff] = useState(false);
    const [categoryId, setCategoryId] = useState(null);
    const [page, setPage] = useState(null);
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
            console.log(page)
            // re-write to normal logic
            const categoryIdState = categoryId !== null ? `?${CATEGORY_SEARCH_PARAM}=${categoryId}` : null;
            const sortValueState = sort.sortItemName !== null ? `${categoryIdState ? '&' : '?'}${SORTING_SEARCH_PARAM}=${sort.sortItemName}` : null;
            const searchValueState = searchValue ? `${categoryIdState || sortValueState ? '&' : '?'}${SEARCH_PARAM}=${searchValue}` : null;
            const pageValueState = page !== null ? `${categoryIdState || sortValueState || searchValueState ? '&' : '?'}${PAGE_COUNT_PARAM}=${page}&${LIMIT}` : null;
            setLoadOff(false);          
            const pizzas = await Controller.load(categoryIdState, sortValueState, searchValueState, pageValueState);
            setPizzas(pizzas);
            setLoadOff(true);
        })();
    }, [categoryId, sort.sortItemName, searchValue, page]);
    const mappedData = Array.isArray(pizzas) && pizzas.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((props, index) => <PizzaItem {...props} key={`el${index}}`}/>) 

    return (
        <>
            <div className="content">
                <div className="contentContainer">
                    <div className="contentContainer__top">
                        <Categories value={categoryId} setCategoryHandler={setCategoryHandler}/>
                        <Sort sort={sort} setSort={setSort} />
                    </div>
                    <h2 className="contentContainer__title">All our products</h2>
                        <div className="contentContainer__items">
                            {loadOff ?
                                mappedData
                                :
                                <Loader countOfLoad={pizzas.length}/>
                            }
                        </div>    
                </div>
            </div>
           <Pagination setPage={setPage}/>                
        </>
    );
}

import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../redux/slices/filterSlice';

/**
 * @component
 * @param {function} clearHandleClick 
 * @returns <CloseButton onClick={clearHandleClick} />
 */
const CloseButton = (props) => (
    <button
        {...props}
        style={{
            background: '#fff', 
            marginLeft: '8px',
            border: '0px',
            cursor: 'pointer',
            lineHeight: '13px',
            color: '',
            fontWeight: 'bold',
        }}
        title="clear">
        x
    </button>
);

export default function Sort() {
    const dispatch = useDispatch();
    const sort = useSelector((state) => state.filter.sort)
    const sortHandleClick = (e) => {
        let constSortKey = {
            isSortClicked: !sort.isSortClicked,
            chosenItem: e.target.dataset.sortId ?? sort.chosenItem,
            sortItemName: popupItems[e.target.dataset.sortId] || popupItems[sort.chosenItem] || null
        };
        dispatch(setSort(constSortKey));
    };
    const clearHandleClick = (e) => {
        e.stopPropagation();
        dispatch(setSort(
            {
                ...sort,
                chosenItem: null,
                sortItemName: null
            }
        ));
    };
    const popupItems = ['popularity', 'price', 'title', 'rating'];
    return (
        <div onClick={sortHandleClick} className="sort">
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform={sort.isSortClicked && 'matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,0,0)'}
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                        
                    />
                </svg>
                <b>{sort.chosenItem ? 'Sorted by:' : 'Sort pizzas' }</b>
                <span>
                    {popupItems[sort.chosenItem]}
                    {sort.chosenItem && <CloseButton onClick={clearHandleClick} title='close'/>}
                </span>
            </div>
            {sort.isSortClicked && 
                <div className="sort__popup">
                    <ul>
                        {popupItems.map((item, index) => (
                            <li data-sort-id={index}
                                key={index}
                                className={sort?.chosenItem === index && 'active'}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
}

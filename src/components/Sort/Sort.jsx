import React, {useState} from 'react';

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

export default function Sort({}) {
    const [sort, setSort] = useState({
        isSortClicked: false,
        chosenItem: false
    });
    const sortHandleClick = (e) => {
        let constSortKey = {
            isSortClicked: !sort.isSortClicked,
            chosenItem: e.target.dataset.sortId || sort.chosenItem
        };
        setSort(constSortKey);
    }
    const clearHandleClick = (e) => {
        e.stopPropagation();
        setSort(
            {
                ...sort,
                chosenItem: false
            }
        );
    }
    const popupItems = ['popularity', 'price', 'abc', 'rating'];
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
                <b>{ sort.chosenItem ? 'Sorted by:' : 'Sort pizzas' }</b>
                <span>
                    {popupItems[sort.chosenItem]}
                    {sort.chosenItem && <CloseButton onClick={clearHandleClick} />}
                </span>
            </div>
            { sort.isSortClicked && 
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

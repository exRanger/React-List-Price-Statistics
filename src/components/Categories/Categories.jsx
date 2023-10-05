import {React, useState} from 'react';

/**
 * Component for showing categories
 * @component
 */
export default function Categories({}) {
    const [category, setCategory] = useState(0);
    
    /**
    * Event handler 
    * @param {event} Event from input
    */
    const setCategoryHandler = (e) => {
        const {activeId} = e.target.dataset;
        setCategory(Number(activeId));
    };
    const pizzaType = ['All', 'Cheese', 'SeaFish', 'Hot', 'Vegan', 'Chicken'];
    return (
        <div onClick={setCategoryHandler} className="categories">
            <ul>
                {pizzaType.map((item, index) => {
                    return <li className={(index === category) && 'active'} data-active-id={index}>{item}</li>
                })}
            </ul>
        </div>
    );
}

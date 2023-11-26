import {React, useState} from 'react';

/**
 * Component for showing categories
 * @component
 */
export default function Categories({value, setCategoryHandler}) {
    const [category, setCategory] = useState(0);
    
    /**
    * Event handler 
    * @param {event} Event from input
    */
  
    const pizzaType = ['All', 'Cheese', 'SeaFish', 'Hot', 'Vegan', 'Chicken'];
    return (
        <div onClick={(e) => setCategoryHandler(e)} className="categories">
            <ul>
                {pizzaType.map((item, index) => {
                    return <li className={(value === index) && 'active'} data-active-id={index} key={index}>{item}</li>
                })}
            </ul>
        </div>
    );
}

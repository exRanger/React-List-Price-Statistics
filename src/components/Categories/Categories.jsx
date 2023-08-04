import {useState} from 'react';

export default function Categories({}) {
    const [category, setCategory] = useState(0);
    const setCategoryHandler = (e) => {
        // data-set <li>'s attr
        const {activeId} = e.target.dataset;
        // typeof activeId - string 
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

import React, {useState} from 'react';

const DEFAULT_PIZZA_TYPE = 'All';

export default function Categories({value, setCategoryHandler}) {
    const [category, setCategory] = useState(0);

    const pizzaType = ['Cheese', 'SeaFish', 'Hot', 'Vegan', 'Chicken'];
    return (
        <div onClick={(e) => setCategoryHandler(e)} className="categories">
            <ul>
                <CategoriesPizzaItem index={null} value={value} item={DEFAULT_PIZZA_TYPE}/>
                {pizzaType.map((item, index) => {
                    return <CategoriesPizzaItem value={value} index={index} item={item}/>
                })}
            </ul>
        </div>
    );
}

function CategoriesPizzaItem({item, value = null, index = null}) {
    return <li className={(value == index) && 'active'} data-active-id={index} key={index}>{item}</li>
}

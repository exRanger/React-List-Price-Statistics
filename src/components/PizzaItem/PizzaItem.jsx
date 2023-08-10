import {useState} from 'react';

export default function PizzaItem({
    title = 'classic',
    type = 'thin',
    size = 26,
    price = 20
}) {
    const [count, setCount] = useState(0);
    const [typePizza, setTypePizza] = useState({type: 0, size: 30});
    const handleCount = () => {
        setCount(count + 1);
    }
    const handleClickOfType = (e) => {
        let {
            type: chosenTypePizza = typePizza.type,
            size: chosenSizePizza = typePizza.size
        } = e.target.dataset;
        setTypePizza({
            type: +chosenTypePizza,
            size: +chosenSizePizza
        });
    }
    //TODO: convert to TS ENUM
    const pizzaType = ['Thin', 'Traditional'];
    const pizzaSize = [30,33,35];
    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{title}</h4>
            <div onClick={handleClickOfType} className="pizza-block__selector">
                <ul>
                    <li className={typePizza.type === pizzaType.indexOf('Thin') && "active"}
                        data-type='0'
                    >
                        {pizzaType[0]}</li>
                    <li className={typePizza.type === pizzaType.indexOf('Traditional') && "active"}
                        data-type='1'
                    >{pizzaType[1]}</li>
                </ul>
                <ul>
                    {pizzaSize.map((size, index) => (
                        <li 
                            key={index}
                            data-size={size} 
                            className={typePizza.size === size && "active"}
                        >
                            {size} sm.</li>))
                    }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">${price}</div>
                <button onClick={handleCount} className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Add</span>
                    <i >{count}</i>
                </button>
            </div>
        </div>
    );
}

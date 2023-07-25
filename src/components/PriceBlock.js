import {PriceItem} from "./PriceItem";
import './PriceBlock.scss';

export const PriceBlock = ({}) => {
    const priceOfIems = [
        {
            dateCreateOfItem: new Date(2023, 7, 24),
            item: 'Macbook Air 13 Pro m2',
            price: 1989,
            id: 1
        },
        {
            dateCreateOfItem: new Date(2023, 7, 24),
            item: 'Iphone',
            price: 1321,
            id: 2
        },
        {
            dateCreateOfItem: new Date(2023, 7, 24),
            item: 'Xioami note 2',
            price: 577,
            id: 3
        }  
    ];

    const gereratedRandomKey = new Date.now();
    return <>
        <div className="priceBlock">
            {priceOfIems.map((item) => {
                return <PriceItem {...item} key={gereratedRandomKey} />
            })}
        </div>
    </>
}

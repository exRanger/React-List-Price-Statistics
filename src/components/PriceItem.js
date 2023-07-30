import {CreateDate} from './CreateDate';
import './PriceItem.scss';

export function PriceItem({dateCreateOfItem, item, price}) {
    return (
        <div className="price-item">
            <CreateDate
                className="price-item__dateCreate"
                date={dateCreateOfItem}
            />
            <div className="price-item__itemName">
                <strong>{item}</strong>
            </div>
            <div className="price-item__cost">${price}</div>
        </div>
    );
}

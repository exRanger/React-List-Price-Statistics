import './PriceItem.scss'

export function PriceItem({dateCreateOfItem, item, price}) {
    const creationDate = dateCreateOfItem.toLocaleDateString();
    return (
        <div className="price-item">
                <div>{creationDate}</div>
                <div className='price-item__itemName'>
                    <strong>{item}</strong>
                </div>
                <div className="price-item__cost">
                    {price}
                </div>
        </div>
    )
}
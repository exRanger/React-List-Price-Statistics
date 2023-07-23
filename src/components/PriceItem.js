import './PriceItem.scss'

export function PriceItem() {
    return (
        <div className="price-item">
                <div>Date: March 2022.23</div>
                <div className='price-item__itemName'>
                    <strong>Iphone 11</strong>
                </div>
                <div className="price-item__cost">
                    $1359
                </div>
        </div>
    )
}
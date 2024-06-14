import { BasketItem } from "./BasketItem"

export const Basket = ({ items, onAdd, onSubtract, onRemove, onSale, onSaleClick }) => {
    return <div>
        {!onSaleClick && (
            <button onClick={onSale}>Sale</button>)
        }
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>count</th>
                    <th>subTotal</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {items.map(elm => <BasketItem
                    key={elm.id}
                    onAdd={() => onAdd(elm.id)}
                    onSubtract={() => onSubtract(elm.id)}
                    onRemove={() => onRemove(elm.id)}
                    {...elm}
                />)}
            </tbody>
        </table>
    </div>
}
export const BasketItem = ({ title, price, count, subTotal, onAdd, onSubtract, onRemove }) => {
    return <tr>
        <td>{title}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{subTotal}</td>
        <td>
            <button onClick={onAdd}>+</button>
            <button onClick={onSubtract}>-</button>
            <button onClick={onRemove}>x</button>
        </td>
    </tr>
}
export const ProductItem = ({ title, id, photo, price, onMove }) => {
    return <div>
        <img src={photo} />
        <p>{title}</p>
        <p><strong>{price}</strong></p>
        <button onClick={() => onMove(id)}>Move</button>
    </div>

}
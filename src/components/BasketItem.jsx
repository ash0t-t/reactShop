import { useContext } from "react"
import { UserContext } from "../UserContext"

export const BasketItem = ({ id, title, price, count, subTotal }) => {
  const { dispatch } = useContext(UserContext)

  return (
    <tr>
      <td>{title}</td>
      <td>{price}</td>
      <td>{count}</td>
      <td>{subTotal}</td>
      <td>
        <button onClick={() => dispatch({ type: "ADD", payload: id })}>+</button>
        <button onClick={() => dispatch({ type: "SUB", payload: id })}>-</button>
        <button onClick={() => dispatch({ type: "DEL", payload: id })}>x</button>
      </td>
    </tr>
  )
}

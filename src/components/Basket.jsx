import { useContext } from "react"
import { UserContext } from "../UserContext"
import { BasketItem } from "./BasketItem"

export const Basket = () => {
  const { state } = useContext(UserContext)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Count</th>
            <th>SubTotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.basket.map(elm => (
            <BasketItem key={elm.id} {...elm} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

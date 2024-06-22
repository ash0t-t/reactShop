import { useContext } from "react"
import { UserContext } from "../UserContext"
import { ProductItem } from "./ProductItem"

export const ProductList = () => {
  const { state, dispatch } = useContext(UserContext)

  const moveToCart = id => {
    dispatch({ type: "MOV", payload: id })
  }

  return (
    <div>
      <h3>Product List</h3>
      <div className="list">
        {
            state.users.map(elm => (
            <ProductItem key={elm.id} {...elm} onMove={() => moveToCart(elm.id)} />))
        }
      </div>
    </div>
  )
}

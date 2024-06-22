import { useContext } from "react"
import { UserContext } from "../UserContext"

export const ProductItem = ({ title, id, photo, price }) => {
  const { dispatch } = useContext(UserContext)

  return (
    <div>
      <img src={photo} />
      <p>{title}</p>
      <p><strong>{price}</strong></p>
      <button onClick={() => dispatch({ type: "MOV", payload: id })}>Move</button>
    </div>
  )
}

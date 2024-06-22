import { useReducer, useEffect } from 'react'
import './App.css'
import { Basket } from './components/Basket'
import { ProductList } from './components/ProductList'
import { UserContext, initialState, reducer } from './UserContext'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: 'TOTAL' })
  }, [state.basket])

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <div className="row">
        <ProductList />
        <Basket />
      </div>
      <h1>Total: {state.total}</h1>
    </UserContext.Provider>
  )
}

export default App

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Basket } from './components/Basket'
import { ProductList } from './components/ProductList'

function App() {
  const [total, setTotal] = useState(0)
  const [basket, setBasket] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3004/items")
      .then(res => res.json())
      .then(res => setProducts(res))
  }, [])
  useEffect(() => {
    setTotal(basket.reduce((a, b) => a + (b.price * b.count), 0))
  }, [basket])

  const moveToCart = id => {
    let found = products.find(x => x.id == id)
    let inBasket = basket.find(elm => elm.id == id)
    if (inBasket) {
      setBasket(basket.map(elm =>
        elm.id == id ? { ...elm, count: elm.count + 1, subTotal: (elm.count + 1) * elm.price } : elm
      ))
    } else {
      setBasket([...basket, { ...found, count: 1, subTotal: found.price }])
    }
  }
  const add = id => {
    setBasket(basket.map(elm =>
      elm.id == id ? { ...elm, count: elm.count + 1, subTotal: (elm.count + 1) * elm.price } : elm
    ))
  }
  const subtract = id => {
    setBasket(basket.map(elm =>
      elm.id == id && elm.count > 1 ? { ...elm, count: elm.count - 1, subTotal: (elm.count - 1) * elm.price } : elm
    ))
  }
  const remove = id => {
    setBasket(basket.filter(elm => elm.id != id))
  }

  return (
    <>
      <div className='row'>
        <ProductList items={products} onMove={moveToCart} />
        <Basket
          items={basket}
          onAdd={add}
          onSubtract={subtract}
          onRemove={remove}
        />
      </div>
      <h1>Total: {total}</h1>
    </>
  )
}

export default App

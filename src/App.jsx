import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Basket } from './components/Basket'
import { ProductList } from './components/ProductList'

function App() {
  const [isClicked, setIsClicked] = useState(0)
  const [basket, setBasket] = useState([])
  const [products, setProducts] = useState([
    { id: 101, title: "Psychology", price: 10000, photo: "https://m.media-amazon.com/images/I/91AiNeHUoNL._AC_UF1000,1000_QL80_.jpg" },
    { id: 102, title: "Samvel", price: 20000, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_0HEiR3BOmU84GCBP6U5fxsz12fKfYtZswA&usqp=CAU" },
    { id: 103, title: "Hovazadzori geriner@", price: 5000, photo: "https://images-na.ssl-images-amazon.com/images/I/81LDP+GDKVL._AC_UL210_SR210,210_.jpg" },
    { id: 104, title: "Aybolit", price: 15000, photo: "https://static.periplus.com/vUrOCND_0zeVzmUSphOzvCtjOPlAcIT_LdbRBke1zortnnURweXOxUOJkJlNjVuEA--" },
    { id: 105, title: "JS with Marjinyan", price: 90000, photo: "https://images4.penguinrandomhouse.com/cover/9780744060089?height=295&alt=cover_coming_soon.jpg" }
  ])
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
  const sale = () => {
    setIsClicked(true)
    setBasket(basket.map(elm => 
      elm.count > 3 ? {...elm, subTotal: elm.price * (elm.count - 1)} : elm
    ))
  }

  return (
    <>
      <div className='row'>
        <ProductList items={products} onMove={moveToCart} />
        <Basket
          items={basket}
          onSale={sale}
          onSaleClick={isClicked}
          onAdd={add}
          onSubtract={subtract}
          onRemove={remove}
        />
      </div>

    </>
  )
}

export default App

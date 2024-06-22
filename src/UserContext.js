import React from "react"

export const UserContext = React.createContext()
export const initialState = {
  users: [
    {
      id: "101",
      title: "Psychology",
      price: 10000,
      count: 0,
      subTotal: 0,
      photo: "https://m.media-amazon.com/images/I/91AiNeHUoNL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "102",
      title: "Samvel",
      price: 20000,
      count: 0,
      subTotal: 0,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_0HEiR3BOmU84GCBP6U5fxsz12fKfYtZswA&usqp=CAU",
    },
    {
      id: "103",
      title: "Hovazadzori geriner@",
      price: 5000,
      count: 0,
      subTotal: 0,
      photo: "https://images-na.ssl-images-amazon.com/images/I/81LDP+GDKVL._AC_UL210_SR210,210_.jpg",
    },
    {
      id: "104",
      title: "Aybolit",
      price: 15000,
      count: 0,
      subTotal: 0,
      photo: "https://static.periplus.com/vUrOCND_0zeVzmUSphOzvCtjOPlAcIT_LdbRBke1zortnnURweXOxUOJkJlNjVuEA--",
    },
    {
      id: "105",
      title: "JS with Marjinyan",
      price: 90000,
      count: 0,
      subTotal: 0,
      photo: "https://images4.penguinrandomhouse.com/cover/9780744060089?height=295&alt=cover_coming_soon.jpg",
    },
  ],
  basket: [],
  total: 0,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        basket: state.basket.map(elm =>
          elm.id == action.payload ? { ...elm, count: elm.count + 1, subTotal: (elm.count + 1) * elm.price } : elm
        )
      }
    case "SUB":
      return {
        ...state,
        basket: state.basket.map(elm =>
          elm.id == action.payload && elm.count > 1 ? { ...elm, count: elm.count - 1, subTotal: (elm.count - 1) * elm.price } : elm
        )
      }
    case "DEL":
      return {
        ...state,
        basket: state.basket.filter(x => x.id != action.payload)
      }
    case "MOV":
      let found = state.users.find(x => x.id == action.payload)
      let inBasket = state.basket.find(elm => elm.id == action.payload)
      if (inBasket) {
        return {
          ...state,
          basket: state.basket.map(elm =>
            elm.id == action.payload ? { ...elm, count: elm.count + 1, subTotal: (elm.count + 1) * elm.price } : elm
          )
        }
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...found, count: 1, subTotal: found.price }]
        }
      }
    case "TOTAL":
      return {
        ...state,
        total: state.basket.reduce((a, b) => a + b.subTotal, 0)
      }
    default:
      return state
  }
};

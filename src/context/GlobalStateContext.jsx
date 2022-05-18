import React, { createContext, useState } from 'react'

export const GlobalContext = createContext('')

const GlobalStateContext = ({children}) => {

    const [cartProducts, setCartProducts] = useState([])

    const addToCart = (product) => {
      if(isInCart(product.id)){
        cartProducts.forEach((element,index) =>{
          if(element.id == product.id) cartProducts[index].amount += product.amount
        })
      } else setCartProducts([...cartProducts, product])
    }

    const isInCart = (id) => {
      return cartProducts.filter( product => product.id == id).length > 0 ? true : false
    }

    const removeItem = (id) => setCartProducts(cartProducts.filter( product => product.id != id))

    const clear = () => setCartProducts([])

  return (
    <GlobalContext.Provider value={{cartProducts, addToCart, removeItem, clear}}>
        { children }
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext
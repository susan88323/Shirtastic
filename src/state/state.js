import React, { createContext, useContext, useReducer } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newCart = [...state.cart]
      if (newCart.findIndex(item => item.id === action.payload.id) === -1) {
        newCart.push(action.payload)
      }
      return { ...state, cart: newCart }
    default:
      return state
  }
}

export const StateContext = createContext()
export const StateProvider = ({ children }) => {
  const initialState = {
    cart: [],
  }
  return <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
}

export const ADD_TO_CART = "ADD_TO_CART"

export const useStateValue = () => useContext(StateContext)

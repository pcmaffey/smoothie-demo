import React, { useReducer } from 'react'

const initialState = {
  ingredients: [],
  response: null,
}

// ruleset for managing ingredients
const reducer = (state, action) => {
  const newState = {
    ingredients: [...state.ingredients],
    response: null,
  }

  if (action.type === 'reset') return initialState

  // TODO make name unique
  // TODO check vs total volume
  // TODO validate vs any rules
  if (action.type === 'add') {
    newState.ingredients.push({ ...action.ingredient })

    newState.response = ''
  } else if (action.type === 'remove') {
    newState.ingredients.splice(action.index, 1)
  } else if (action.type === 'edit') {
    newState.ingredients[action.index] = { ...action.ingredient }
  }

  return newState
}

export default function useIngredients() {
  return useReducer(reducer, initialState)
}

import React, { useReducer } from 'react'

// units as tuples with singular / plural forms
export const units = {
  floz: ['fl oz.', 'fl oz.'],
  tsp: ['tsp', 'tsps'],
  tbsp: ['tbsp', 'tbsps'],
  cup: ['cup', 'cups'],
  ml: ['ml', 'mls'],
  l: ['liter', 'liters'],
  pt: ['pint', 'pints'],
}

const initialState = {
  ingredients: [],
  servingSize: {
    servings: 1,
    size: 12,
    volume: 12,
  },
  response: null,
}

// check ingredient for errors
function invalidate({ name, amount, unit }): string | undefined {
  if (!name) return "What's your ingredient?"
  if (amount === 0) return 'Enter an amount'
  if (typeof amount !== 'number') return 'Enter amount as a number'
  return null
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
    newState.response = invalidate(action.ingredient)
    if (newState.response) return newState

    newState.ingredients.push({ ...action.ingredient })
  } else if (action.type === 'remove') {
    newState.ingredients.splice(action.index, 1)
  } else if (action.type === 'edit') {
    newState.response = invalidate(action.ingredient)
    if (newState.response) return newState

    newState.ingredients[action.index] = { ...action.ingredient }
  } else if (action.type === 'servings') {
    newState.servingSize = { ...action.servingSize }
  }

  return newState
}

export default function useRecipe() {
  return useReducer(reducer, initialState)
}

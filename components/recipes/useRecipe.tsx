import React, { useReducer } from 'react'

// units as with singular / plural forms + conversion to fl oz
export const units = {
  floz: {
    s: 'fl oz.',
    p: 'fl oz.',
    oz: 1,
  },
  tsp: {
    s: 'tsp',
    p: 'tsps',
    oz: 1.6667,
  },
  tbsp: {
    s: 'tbsp',
    p: 'tbsps',
    oz: 0.5,
  },
  cup: {
    s: 'cup',
    p: 'cups',
    oz: 8,
  },
  ml: {
    s: 'ml',
    p: 'ml',
    oz: 0.0338,
  },
  l: {
    s: 'liter',
    p: 'liters',
    oz: 33.8141,
  },
  pt: {
    s: 'pint',
    p: 'pints',
    oz: 16,
  },
}

// convert unit to oz and calc volume
function calcVolume({ amount, unit }) {
  return units[unit].oz * amount
}

// random color generator
function getColorCode() {
  var makeColorCode = '0123456789ABCDEF'
  var code = '#'
  for (var count = 0; count < 6; count++) {
    code = code + makeColorCode[Math.floor(Math.random() * 16)]
  }
  return code
}

const initialState = {
  ingredients: [],
  servingSize: {
    servings: 1,
    size: 12,
    volume: 12,
  },
  // total from ingredients
  volume: 0,
  // dispatch response
  response: null,
}

// ruleset for managing ingredients
const reducer = (state, action) => {
  const newState = {
    ingredients: [...state.ingredients],
    servingSize: { ...state.servingSize },
    volume: state.volume,
    response: null,
  }

  // check ingredient for errors
  function invalidate({ name, amount, unit }): string | undefined {
    if (!name) return "What's your ingredient?"

    if (amount === 0) return 'Enter an amount'
    if (typeof amount !== 'number') return 'Enter amount as a number'

    // Make ingredient name unique
    if (newState.ingredients.includes((ingredient) => ingredient.name === name))
      return 'That ingredient has already been added.'
    return null
  }

  if (action.type === 'reset') return initialState

  // add new ingredient
  if (action.type === 'add') {
    newState.response = invalidate(action.ingredient)
    if (newState.response) return newState

    const volume = calcVolume(action.ingredient)
    newState.ingredients.push({
      ...action.ingredient,
      color: getColorCode(),
      volume,
    })

    newState.volume += volume

    // remove ingredient
  } else if (action.type === 'remove') {
    newState.ingredients.splice(action.index, 1)
    newState.volume -= calcVolume(action.ingredient)

    // edit ingredient
  } else if (action.type === 'edit') {
    newState.response = invalidate(action.ingredient)
    if (newState.response) return newState

    const volume = calcVolume(action.ingredient)
    newState.ingredients[action.index] = { ...action.ingredient, volume }
    newState.volume += volume

    // edit serving size
  } else if (action.type === 'servings') {
    newState.servingSize = { ...action.servingSize }

    // multiply recipe based on serving size
  } else if (action.type === 'multiply') {
    const factor = action.servingSize.volume / newState.servingSize.volume
    newState.ingredients = newState.ingredients.map((ingredient) => {
      const newIngredient = {
        ...ingredient,
        amount: Math.round(ingredient.amount * factor * 100) / 100,
        volume: Math.round(ingredient.volume * factor * 100) / 100,
      }
      return newIngredient
    })
    newState.volume = Math.round(newState.volume * factor * 100) / 100
    newState.servingSize = { ...action.servingSize }
  }

  return newState
}

export default function useRecipe(recipeData) {
  return useReducer(reducer, recipeData || initialState)
}

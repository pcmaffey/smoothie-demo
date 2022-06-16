import React, { useState, useReducer } from 'react'
import Header from './Header'
import s from './s.module.scss'
import { useCreateRecipe } from 'components/api'
import useIngredients from './useIngredients'
import Ingredient from './Ingredient'
type Props = {
  // children: ReactNode
}

export default function Create(): Props {
  const [name, setName] = useState('')
  const [ingredientName, setIngredientName] = useState('')
  const [amount, setAmount] = useState(0)
  const [unit, setUnit] = useState('ounces')
  console.log('unit :', unit)
  const [recipe, dispatch] = useIngredients()

  const submit = useCreateRecipe()

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    submit({ name, ingredients })
  }
  /**
   * TODO
   *
   * default: 12 ounces is 1 serving. (edit servings or edit ounces)
   */
  return (
    <div>
      <form onSubmit={submitData}>
        <h1>New Recipe</h1>
        <input
          autoFocus
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          type="text"
          value={name}
        />

        {recipe.ingredients.map((ingredient, i) => {
          return (
            <Ingredient
              key={i}
              name={ingredient.name}
              amount={ingredient.amount}
            />
          )
        })}
        <input
          onChange={(e) => setIngredientName(e.target.value)}
          placeholder="New Ingredient"
          type="text"
          value={ingredientName}
        />
        <input
          onChange={(e) => {
            const value = e.target.value
            //TODO check vs max volume
            if (value >= 0) setAmount(value)
          }}
          placeholder="Amount"
          type="number"
          value={amount}
        />

        <select
          name="unit"
          id="cars"
          onChange={(e) => setUnit(e.target.value)}
          value={unit}>
          <option value="ounces">fl oz.</option>
          <option value="cups">cups</option>
          <option value="mL">mL</option>
          <option value="liter">liter</option>
          <option value="pint">pint</option>
        </select>
        <button>Add</button>
        <button>Clear</button>
        <button type="submit">Save Recipe</button>
      </form>
    </div>
  )
}

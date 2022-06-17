import React, { useState, useEffect, useReducer } from 'react'
import Header from './Header'
import s from './s.module.scss'
import { useCreateRecipe } from 'components/api'
import useRecipe, { units } from './useRecipe'
import Ingredient from './Ingredient'
import Servings from './Servings'
import Volume from './Volume'
type Props = {
  // children: ReactNode
}

export default function Create(): Props {
  const [name, setName] = useState('')
  const [ingredientName, setIngredientName] = useState('')
  const [amount, setAmount] = useState(0)
  const [unit, setUnit] = useState('cup')
  const [recipe, dispatch] = useRecipe()
  const [message, setMessage] = useState('')

  // reset ingredient after adding new
  useEffect(() => {
    if (!recipe.response) {
      setIngredientName('')
      setAmount(0)
      // keep unit the same as previous
    }
  }, [recipe.response])

  const submit = useCreateRecipe()

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (!name) return setMessage('Give your recipe a name')
    if (!recipe.ingredients.length)
      return setMessage('Add some ingredients to your recipe')
    submit({
      name,
      recipeData: {
        ingredients: recipe.ingredients,
        servingSize: recipe.servingSize,
        volume: recipe.volume,
      },
    })
  }

  return (
    <form onSubmit={submitData} className={s.recipeForm}>
      {message && (
        <div className={s.message} onClick={() => setMessage('')}>
          {message}
        </div>
      )}
      <input
        autoFocus
        onChange={(e) => setName(e.target.value)}
        placeholder="New Recipe"
        type="text"
        value={name}
        className={s.name}
      />
      <Servings
        size={recipe.servingSize.size}
        servings={recipe.servingSize.servings}
        setServingSize={(servingSize) =>
          dispatch({ type: 'servings', servingSize })
        }
      />
      <div className={s.new}>
        <input
          onChange={(e) => setIngredientName(e.target.value)}
          placeholder="New Ingredient"
          type="text"
          value={ingredientName}
        />
        <input
          onChange={(e) => {
            const value = Number(e.target.value)
            if (value >= 0) setAmount(value)
          }}
          placeholder="Amount"
          type="number"
          value={amount}
        />

        <select
          name="unit"
          onChange={(e) => setUnit(e.target.value)}
          value={unit}>
          {Object.entries(units).map(([key, value]) => (
            <option value={key} key={key}>
              {amount == 1 ? value.s : value.p}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: 'add',
              ingredient: { name: ingredientName, amount, unit },
            })
          }>
          Add
        </button>
        <button type="button">Clear</button>
      </div>
      <div className={s.ingredients}>
        <div className={s.list}>
          {recipe.ingredients.map((ingredient, i) => {
            return <Ingredient key={i} {...ingredient} />
          })}
        </div>
        <Volume
          total={recipe.servingSize.volume}
          current={recipe.volume}
          ingredients={recipe.ingredients}
        />
      </div>
      <button type="submit">Save Recipe</button>
    </form>
  )
}

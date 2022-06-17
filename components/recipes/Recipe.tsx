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

export default function Recipe({ id, name, recipe, published, author }): Props {
  return (
    <div className={s.recipe}>
      <h2>{name}</h2>
      <Servings
        size={recipe.servingSize.size}
        servings={recipe.servingSize.servings}
        setServingSize={
          (servingSize) => {}
          // dispatch({ type: 'servings', servingSize })
        }
      />

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
    </div>
  )
}

import React, { useState, useEffect, useReducer } from 'react'
import Header from './Header'
import s from './s.module.scss'
import { usePublishRecipe } from 'components/api'
import useRecipe from './useRecipe'
import Ingredient from './Ingredient'
import Servings from './Servings'
import Volume from './Volume'
import { useSession } from 'next-auth/react'
import Link from 'components/elements/Link'
type Props = {
  // children: ReactNode
}

export default function Recipe({
  id,
  name,
  recipeData,
  published,
  author,
  isAuthor,
}): Props {
  const { data: session } = useSession()
  const [recipe, dispatch] = useRecipe(recipeData)
  const publish = usePublishRecipe()
  return (
    <div className={s.recipe}>
      <h2 className={s.name}>{name}</h2>
      <div className={s.details}>
        {author && (
          <p>
            <i>by {author.name}</i>
          </p>
        )}
        {published ? (
          <p>
            <i>published</i>
          </p>
        ) : (
          isAuthor && <Link onClick={() => publish(id)}>Publish</Link>
        )}
      </div>
      <Servings
        size={recipe.servingSize.size}
        servings={recipe.servingSize.servings}
        setServingSize={(servingSize) =>
          dispatch({ type: 'multiply', servingSize })
        }
        className={s.bg}
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

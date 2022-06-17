import React, { useEffect } from 'react'
import Header from './Header'
import s from './s.module.scss'
import { useMyRecipes } from 'components/api'
import Link from 'components/elements/Link'
type Props = {
  // children: ReactNode
}

function Recipe({ name, id }) {
  return (
    <Link className={s.recipeLink} href={`/recipes/${id}`}>
      {name}
    </Link>
  )
}

export default function MyRecipes(): Props {
  const { data, local, loading, error } = useMyRecipes()
  if (loading) return <div>Loading...</div>
  if (!data?.length && !local?.length) return <div />

  return (
    <div>
      {local.map((recipe) => (
        <Recipe key={recipe.id} {...recipe} />
      ))}
    </div>
  )
}

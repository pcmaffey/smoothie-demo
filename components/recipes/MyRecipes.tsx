import React, { useEffect } from 'react'
import Header from './Header'
import s from './s.module.scss'
import { useMyRecipes } from 'components/api'
import Link from 'components/elements/Link'
type Props = {
  // children: ReactNode
}

function Recipe({ name, id, published, createdAt }) {
  console.log('createdAt :', createdAt)
  return (
    <Link className={s.recipeLink} href={`/recipes/${id}`}>
      <b>{name}</b> <span>{createdAt.slice(0, 10)}</span>
      {published && <i>published</i>}
    </Link>
  )
}

export default function MyRecipes(): Props {
  const { data, local, loading, error } = useMyRecipes()
  if (loading) return <div>Loading...</div>

  return (
    <div className={s.recipes}>
      {local.map((recipe) => (
        <Recipe key={recipe.id} {...recipe} />
      ))}
      {data?.map((recipe) => (
        <Recipe key={recipe.id} {...recipe} />
      ))}
      {!local.length && !data?.length && (
        <p>
          Ready to create your first recipe?{' '}
          <Link href="/create">Let's get started</Link>
        </p>
      )}
    </div>
  )
}

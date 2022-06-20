import React, { useEffect } from 'react'
import Header from './Header'
import s from './s.module.scss'
import Link from 'components/elements/Link'
type Props = {
  // children: ReactNode
}

function Recipe({ name, id, published, author, createdAt }) {
  return (
    <Link className={s.recipeLink} href={`/recipes/${id}`}>
      <b>{name}</b>

      <span>{createdAt?.slice(0, 10)}</span>
      {author && <i>by {author.name}</i>}
      {published && <i>published</i>}
    </Link>
  )
}

export default function Recipes({ data, local, home }): Props {
  console.log('data :', data)
  return (
    <div className={s.recipes}>
      {local?.map((recipe) => (
        <Recipe key={recipe.id} {...recipe} />
      ))}
      {data?.map((recipe) => (
        <Recipe
          key={recipe.id}
          {...recipe}
          author={!home && recipe.author}
          published={home && recipe.published}
        />
      ))}
      {!local?.length && !data?.length && home && (
        <p>
          Ready to create your first recipe?{' '}
          <Link href="/create">Let's get started</Link>
        </p>
      )}
    </div>
  )
}

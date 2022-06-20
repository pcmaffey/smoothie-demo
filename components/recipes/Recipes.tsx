import s from './s.module.scss'
import Link from 'components/elements/Link'

import { Recipe, LocalRecipe } from 'components/types'

type Props = {
  data?: Recipe[]
  local?: LocalRecipe[]
  home?: boolean
}

function RecipeLink({ name, id, published, author, createdAt }: Recipe) {
  return (
    <Link className={s.recipeLink} href={`/recipes/${id}`}>
      <b>{name}</b>

      <span>{createdAt?.slice(0, 10)}</span>
      {author && <i>by {author.name}</i>}
      {published && <i>published</i>}
    </Link>
  )
}

export default function Recipes({ data, local, home }: Props) {
  return (
    <div className={s.recipes}>
      {local?.map((recipe) => (
        <RecipeLink key={recipe.id} {...recipe} />
      ))}
      {data?.map((recipe) => (
        <RecipeLink
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

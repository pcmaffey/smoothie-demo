import Link from 'components/elements/Link'
import s from './s.module.scss'

export default function Nav() {
  return (
    <nav className={s.nav}>
      <Link href="/">My recipes</Link>
      <Link href="/create">Create new recipe</Link>
      <Link href="/recipes">Find a recipe</Link>
    </nav>
  )
}

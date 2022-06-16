import Link from 'components/elements/Link'
import s from './s.module.scss'

export default function Nav() {
  return (
    <nav className={s.nav}>
      <Link href="/create">Create new recipe</Link>
    </nav>
  )
}

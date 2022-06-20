import React from 'react'
import Link from 'components/elements/Link'
import { signOut, useSession } from 'next-auth/react'

import s from './s.module.scss'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className={s.header}>
      <div className={s.h}>
        <h1>Smoothie Operator</h1>
        <h3>Custom yummy, tasty smoothie recipes</h3>
      </div>
      <div className={s.right}>
        {session ? (
          <Link href="/api/auth/signout" className={s.login}>
            Log Out
          </Link>
        ) : (
          <Link href="/api/auth/signin" className={s.login}>
            Log In
          </Link>
        )}
      </div>
    </header>
  )
}

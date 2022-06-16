import React, { ReactNode } from 'react'
import Header from './Header'
import Nav from './Nav'
import s from './s.module.scss'

type Props = {
  children: ReactNode
}

export default function Layout({ children }): Props {
  return (
    <div className={s.layout}>
      <Header />
      <Nav />
      <main>{children}</main>
    </div>
  )
}

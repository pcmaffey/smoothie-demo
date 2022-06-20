import React, { ReactNode } from 'react'
import Header from './Header'
import Nav from './Nav'
import s from './s.module.scss'

type Props = {
  children: ReactNode
  loading?: boolean
  error?: string
}

export default function Layout({ children, loading, error }: Props) {
  let main = children
  if (loading) main = <div className={s.loading}>Loading...</div>
  else if (error) main = <div className={s.error}>{error}</div>
  return (
    <div className={s.layout}>
      <Header />
      <Nav />
      <main>{main}</main>
    </div>
  )
}

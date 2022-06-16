import React, { ReactNode } from 'react'
import Header from './Header'
import Nav from './Nav'
import s from './s.module.scss'

type Props = {
  name: string
  amount: number
}

export default function Ingredient({ name, amount }): Props {
  return (
    <div className={s.ingredient}>
      <div>{name}</div>
      <div>{amount}</div>
    </div>
  )
}

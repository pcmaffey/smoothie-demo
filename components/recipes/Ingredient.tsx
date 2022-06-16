import React, { ReactNode } from 'react'
import Header from './Header'
import Nav from './Nav'
import s from './s.module.scss'

type Props = {
  name: string
  amount: number
  unit: string
}

export default function Ingredient({ name, amount, unit }): Props {
  return (
    <div className={s.ingredient}>
      <div>{name}</div>
      <div>
        {amount} {unit}
      </div>
    </div>
  )
}

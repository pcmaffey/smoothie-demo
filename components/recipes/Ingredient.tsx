import React, { ReactNode } from 'react'
import Header from './Header'
import Nav from './Nav'
import s from './s.module.scss'

type Props = {
  name: string
  amount: number
  unit: string
  color: string
  volume: number
}

export default function Ingredient({
  name,
  amount,
  unit,
  color,
  volume,
}): Props {
  return (
    <div className={s.ingredient}>
      <div className={s.color} style={{ backgroundColor: color }} />
      <div>
        {name} {color}
      </div>
      <div>
        {amount} {unit}
      </div>
    </div>
  )
}

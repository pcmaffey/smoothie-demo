import React, { ReactNode } from 'react'
import s from './s.module.scss'

import { units } from './useRecipe'
type Props = {
  name: string
  amount: number
  unit: string
  color: string
  volume: number
  remove: () => void
}

export default function Ingredient({
  name,
  amount,
  unit,
  color,
  volume,
  remove,
}: Props) {
  return (
    <div className={s.ingredient}>
      <div className={s.color} style={{ backgroundColor: color }} />
      <p>
        <b>{name}</b>
        <span className={s.amount}>
          {amount} {units[unit][amount == 1 ? 's' : 'p']}
        </span>
      </p>
      {remove && (
        <div onClick={remove} className={s.remove}>
          X
        </div>
      )}
    </div>
  )
}

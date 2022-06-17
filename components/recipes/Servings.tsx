import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import s from './s.module.scss'

type Props = {
  children: ReactNode
}

const sizes = {
  8: 'small (8 fl oz.)',
  12: 'med (12 fl oz.)',
  16: 'large (16 fl oz.)',
}

export default function Servings({ size, servings, setServingSize }): Props {
  return (
    <div className={s.servings}>
      <label>Make this recipe for</label>
      <input
        onChange={(e) => {
          const value = parseInt(e.target.value)
          if (value > 0)
            setServingSize({ servings: value, size, volume: size * value })
        }}
        placeholder="1"
        type="number"
        value={servings}
      />
      <div className={s.sizes}>
        {Object.entries(sizes).map(([key, value]) => (
          <div
            key={key}
            onClick={() =>
              setServingSize({ servings, size: key, volume: key * servings })
            }
            className={cx(key == size && s.selected)}>
            {value}
          </div>
        ))}
      </div>
      smoothies = {size * servings} total fl oz (US).
    </div>
  )
}

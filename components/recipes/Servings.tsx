import cx from 'classnames'
import s from './s.module.scss'
import { ServingSize } from 'components/types'
type Props = {
  size: number
  servings: number
  setServingSize: (arg: ServingSize) => void
  className?: string
}

const sizes = {
  8: 'small (8 fl oz.)',
  12: 'med (12 fl oz.)',
  16: 'large (16 fl oz.)',
}

export default function Servings({
  size,
  servings,
  setServingSize,
  className,
}: Props) {
  return (
    <div className={cx(s.servings, className)}>
      <label>Make this recipe for:</label>
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
              setServingSize({
                servings,
                size: parseInt(key),
                volume: parseInt(key) * servings,
              })
            }
            className={cx(parseInt(key) === size && s.selected)}>
            {value}
          </div>
        ))}
      </div>
      <p>
        <i>
          serving{servings > 1 ? 's' : ''} - {size * servings} total fl oz (US).
        </i>
      </p>
    </div>
  )
}

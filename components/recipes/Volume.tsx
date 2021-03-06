import React from 'react'
import { Ingredient } from 'components/types'
import s from './s.module.scss'

type Props = {
  total: number
  current: number
  ingredients: Ingredient[]
}

export default function Volume({ total, current, ingredients }: Props) {
  const diff = total - current
  let offset = 0
  return (
    <div className={s.volume}>
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" width="350px">
        <defs>
          <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="100%">
            {ingredients.map(({ color, volume }, i) => {
              //   calculate value of offset based on ingredient volume's % of total
              const percent = (volume / Math.max(total, current)) * 100
              offset += percent
              return (
                <React.Fragment key={i}>
                  <stop
                    offset={`${
                      offset -
                      percent +
                      (ingredients.length > 1 ? percent * 0.2 : 0)
                    }%`} // add a little fuzz to blend the colors
                    stopColor={color}
                  />
                  <stop
                    offset={`${
                      offset - (i < ingredients.length - 1 ? percent * 0.2 : 0)
                    }%`}
                    stopColor={color}
                  />
                </React.Fragment>
              )
            })}
            {diff > 0 && (
              <stop
                offset={`${(current / total) * 100}%`}
                stopColor="transparent"
              />
            )}
          </linearGradient>
        </defs>

        <g>
          <g
            transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"
            fill="#a89f9f">
            <path d="M4182.2,5004.3c-1019-65.4-1617-244.2-1609.3-482.6c0-28.8,136.5-1088.3,303.8-2351.5c205.7-1574.7,313.4-2328.4,338.4-2395.7c51.9-142.3,165.3-263.4,319.2-338.4l128.8-63.4h1076.7h1076.7l107.7,50c246.1,115.4,346.1,267.3,398,596.1l32.7,219.2l413.4,176.9c726.8,309.5,719.1,305.7,834.5,430.7c63.4,67.3,123,155.7,150,223c44.2,111.5,44.2,115.4,44.2,957.5c0,840.2,0,846-44.2,955.6c-55.8,136.5-209.6,309.6-328.8,369.2c-48.1,25-196.1,90.4-328.8,146.1c-132.7,55.8-251.9,113.4-267.3,126.9c-25,23.1-21.1,78.8,25,426.8c28.8,219.2,53.8,428.8,53.8,463.4c5.8,213.4-394.2,367.2-1178.6,453.8C5462.7,4996.6,4447.5,5021.6,4182.2,5004.3z M6512.5,3916c26.9-34.6-496.1-3983.9-536.4-4062.7c-36.5-69.2-80.8-109.6-163.4-151.9c-53.8-26.9-178.8-30.8-1072.9-30.8s-1019,3.8-1072.9,30.8c-82.7,42.3-126.9,82.7-161.5,151.9C3465-69.8,2942.1,3881.4,2967,3916C2994,3950.7,6485.6,3950.7,6512.5,3916z M7041.3,3197c303.8-128.8,348-159.6,409.5-284.6l48.1-96.1v-788.3c0-874.8-1.9-878.7-128.8-999.8c-57.7-53.8-942.1-448-961.3-426.9c-11.5,9.6,336.5,2661,351.8,2686C6776,3312.3,6766.3,3314.2,7041.3,3197z" />
            <path d="M3268.9,2660.5c0-25,76.9-636.4,173-1359.4c94.2-722.9,173-1324.8,173-1338.2c0-15.4,25-51.9,55.8-82.7l55.8-55.8h1009.4c982.5,0,1009.4,0,1057.5,38.5c26.9,21.2,53.8,53.8,59.6,73c15.4,46.2,357.6,2653.4,357.6,2720.7v51.9H4739.8H3268.9V2660.5z" />
            <path
              fill="url(#linear)"
              d="M3268.9,2660.5c0-25,76.9-636.4,173-1359.4c94.2-722.9,173-1324.8,173-1338.2c0-15.4,25-51.9,55.8-82.7l55.8-55.8h1009.4c982.5,0,1009.4,0,1057.5,38.5c26.9,21.2,53.8,53.8,59.6,73c15.4,46.2,357.6,2653.4,357.6,2720.7v51.9H4739.8H3268.9V2660.5z"
            />
            <path d="M3374.7-769.6c-42.3-19.2-96.1-57.7-121.1-84.6c-117.3-125-642.2-1580.5-819.1-2263c-163.4-632.6-261.5-1240.1-223-1384.4c26.9-98,121.1-207.6,221.1-251.9c73.1-34.6,190.3-36.5,2307.3-36.5c2116.9,0,2234.2,1.9,2307.3,36.5c100,44.2,194.2,153.8,221.1,253.8c55.8,201.9-132.7,1151.7-392.2,1972.7C6676-1888.6,6308.7-942.6,6226-852.3c-25,25-78.8,63.5-121.1,82.7c-73.1,32.7-153.8,36.5-1365.1,36.5S3447.7-736.9,3374.7-769.6z M4970.5-1838.7c428.8-111.5,719.1-484.5,721-922.9c0-530.7-415.3-951.7-940.2-951.7c-280.7,0-490.3,84.6-686.4,280.7c-299.9,298-361.5,742.2-155.7,1130.6C4105.3-1932.9,4562.9-1732.9,4970.5-1838.7z" />
            <path d="M4572.5-2594.3c-536.4-534.5-523-507.6-346.1-682.6c175-173,148.1-186.5,680.6,346.1c538.4,538.4,524.9,511.4,344.2,684.5c-82.7,80.8-128.8,109.6-169.2,109.6C5037.8-2136.7,4951.3-2215.5,4572.5-2594.3z" />
          </g>
        </g>
      </svg>
      {diff < 0 ? (
        <p>You'll have {Math.abs(Math.round(diff * 100) / 100)} fl oz. extra</p>
      ) : (
        <p>
          {current} of {total} fl oz.
        </p>
      )}

      {diff < 0 && <i></i>}
    </div>
  )
}

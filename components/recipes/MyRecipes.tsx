import React, { useEffect } from 'react'
import Header from './Header'
import s from './s.module.scss'
import { useMyRecipes } from 'components/api'

type Props = {
  // children: ReactNode
}

export default function MyRecipes(): Props {
  const { data, local, loading, error } = useMyRecipes()
  if (loading) return <div>Loading...</div>
  if (!data && !local) return <div />

  return <div>my recipes</div>
}

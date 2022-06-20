import React from 'react'
import Layout from 'components/layout/Layout'
import dynamic from 'next/dynamic'
import { useMyRecipes } from 'components/api'
// see https://github.com/vercel/next.js/discussions/35773
const Recipes = dynamic(() => import('components/recipes/Recipes'), {
  ssr: false,
})

export default function Home() {
  const { data, local, loading, error } = useMyRecipes()
  return (
    <Layout loading={loading} error={error}>
      <Recipes data={data} local={local} home />
    </Layout>
  )
}

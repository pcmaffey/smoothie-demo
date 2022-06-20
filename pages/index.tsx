import React from 'react'
import Layout from 'components/layout/Layout'
import dynamic from 'next/dynamic'
// see https://github.com/vercel/next.js/discussions/35773
const MyRecipes = dynamic(() => import('components/recipes/MyRecipes'), {
  ssr: false,
})

export default function Home() {
  return (
    <Layout>
      <MyRecipes />
    </Layout>
  )
}

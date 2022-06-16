import React from 'react'
import Layout from 'components/layout/Layout'
import MyRecipes from 'components/recipes/MyRecipes'

export default function Home(props) {
  return (
    <Layout>
      <MyRecipes />
    </Layout>
  )
}

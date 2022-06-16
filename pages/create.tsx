import React from 'react'
import Layout from 'components/layout/Layout'
import CreateRecipe from 'components/recipes/Create'

export default function Home(props) {
  return (
    <Layout>
      <CreateRecipe />
    </Layout>
  )
}

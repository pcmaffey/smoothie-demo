import React from 'react'
import Layout from 'components/layout/Layout'
import Recipes from 'components/recipes/Recipes'
import { useRecipes } from 'components/api'
import { useRouter } from 'next/router'
export default function FindRecipePage() {
  const { data, loading, error } = useRecipes()
  return (
    <Layout loading={loading} error={error}>
      <Recipes data={data} />
    </Layout>
  )
}

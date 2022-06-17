import React from 'react'
import Layout from 'components/layout/Layout'
import Recipe from 'components/recipes/Recipe'
import { useRecipe } from 'components/api'
import { useRouter } from 'next/router'
export default function RecipePage() {
  const { query, push } = useRouter()
  const { data, loading, error } = useRecipe(query.id)
  console.log('recipe :', data, loading, error)
  return (
    <Layout loading={loading} error={error}>
      <Recipe {...data} recipe={data?.recipeData} />
    </Layout>
  )
}

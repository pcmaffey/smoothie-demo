import React from 'react'
import Layout from 'components/layout/Layout'
import Recipe from 'components/recipes/Recipe'
import { useRecipe } from 'components/api'
import { useRouter } from 'next/router'
export default function RecipePage() {
  const { query, push } = useRouter()
  const { data, loading, error, isLocal } = useRecipe(query.id)
  return (
    <Layout loading={loading} error={error}>
      <Recipe {...data} isLocal={isLocal} />
    </Layout>
  )
}

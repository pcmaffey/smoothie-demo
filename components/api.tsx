import useSWR from 'swr'
import { useSession } from 'next-auth/react'

import Router from 'next/router'
/**
 * Hooks for calling /api routes
 */

// escape localStorage so only called on client
var localStorage = typeof window !== 'undefined' ? window.localStorage : null
var fetcher = (...args) => fetch(...args).then((res) => res.json())

const api = {
  myRecipes: '/api/recipes/mine',
  create: 'api/recipes/create',
}

// Fetch users recipes
export function useMyRecipes() {
  const { session } = useSession()
  // fetch recipes from db if logged in
  const { data, error } = useSWR(!session ? api.myRecipes : null, fetcher)

  // also get recipes stored locally
  const local = localStorage?.getItem('recipes')
  return {
    data,
    local: local ? JSON.parse(local) : null,
    loading: !error && !data,
    error,
  }
}

export function useCreateRecipe() {
  const { session } = useSession()
  const submit = async (data) => {
    try {
      const body = JSON.stringify(data)
      // Store to db if logged in, otherwise store to local storage
      if (session) {
        await fetch(api.create, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body,
        })
      } else {
        localStorage?.setItem('recipes', body)
      }
      // return to home
      await Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }
  return submit
}

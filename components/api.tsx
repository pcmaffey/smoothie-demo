import useSWR from 'swr'
import { useState, useEffect, useRef } from 'react'
import { useSession } from 'next-auth/react'
import cuid from 'cuid'
import Router from 'next/router'
/**
 * Hooks for calling /api routes
 */

// escape localStorage so only called on client
var localStorage = typeof window !== 'undefined' ? window.localStorage : null
var fetcher = (...args) => fetch(...args).then((res) => res.json())

// get recipes from local storage
const getLocal = () => JSON.parse(localStorage?.getItem('recipes') || '[]')

const api = {
  myRecipes: '/api/recipes/mine',
  create: '/api/recipes/create',
  recipe: (id) => `/api/recipes/${id}`,
  publish: (id) => `/api/publish/${id}`,
  delete: (id) => `/api/delete/${id}`,
}

// Fetch users recipes
export function useMyRecipes() {
  const { data: session } = useSession()
  // fetch recipes from db if logged in
  const { data } = useSWR(session ? api.myRecipes : null, fetcher)

  const error = data?.error
  // also get recipes stored locally
  const local = getLocal()
  return {
    data,
    local,
    error,
  }
}

// Fetch recipe by id
export function useRecipe(id) {
  // First, see if is in  localStorage
  const local = getLocal()
  let result = local.find((r) => r.id === id)

  const isLocal = !!result

  // if not in localStorage, fetch from db
  const { data } = useSWR(!result && id ? api.recipe(id) : null, fetcher)

  const error = data?.error
  if (!error && data) result = data

  return {
    data: result,
    loading: !error && !result,
    error,
    isLocal,
  }
}

export function useCreateRecipe() {
  const { data: session } = useSession()
  const submit = async (data) => {
    try {
      // Store to db if logged in, otherwise store to local storage
      if (session) {
        const body = JSON.stringify(data)
        await fetch(api.create, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body,
        })
      } else {
        const recipes = getLocal()
        // generate a cuid
        data.id = cuid()
        // add timestamp
        data.createdAt = new Date()

        // add to recipes
        recipes.push(data)

        // save to localstorage
        localStorage?.setItem('recipes', JSON.stringify(recipes))
      }
      // return to home
      await Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }
  return submit
}

export function usePublishRecipe() {
  const { data: session } = useSession()
  const submit = async (id) => {
    try {
      if (!session) throw Error('Not authorized')
      await fetch(api.publish(id), {
        method: 'PUT',
      })

      // return to home
      await Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }
  return submit
}

export function useDeleteRecipe(isLocal) {
  const { data: session } = useSession()
  const submit = async (id) => {
    try {
      // remove from local storage
      if (isLocal) {
        const local = getLocal()

        const index = local.findIndex((r) => r.id === id)
        if (index > 0) local.splice(index, 1)

        // save back to localstorage
        localStorage?.setItem('recipes', JSON.stringify(local))
        console.log('local :', local)
      } else {
        // or else remove from db
        await fetch(api.publish(id), {
          method: 'DELETE',
        })
      }

      // return to home
      await Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }
  return submit
}

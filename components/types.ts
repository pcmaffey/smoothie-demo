export enum Unit {
  floz,
  tsp,
  tbsp,
  cup,
  ml,
  pt,
  l,
}

export type Ingredient = {
  name: string
  amount: number
  unit: Unit
  volume: number
  color: string
}

export type ServingSize = {
  servings: number
  size: number
  volume: number
}

export type RecipeData = {
  ingredients: Ingredient[]
  servingSize: ServingSize
  volume: number
}

export type LocalRecipe = {
  id: string
  name: string
  recipeData: RecipeData
  createdAt: string
}

export type Recipe = LocalRecipe & {
  published?: boolean
  author?: { name: string; email?: string }
}

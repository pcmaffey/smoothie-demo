import { getSession } from 'next-auth/react'
import prisma from 'lib/prisma'

// POST /api/recipes/create
// Required fields in body: name, ingredients
// Optional fields: tags
export default async function handle(req, res) {
  const { name, recipeData, published } = req.body

  const session = await getSession({ req })
  const result = await prisma.recipe.create({
    data: {
      name,
      recipeData,
      published: !!published,
      //   tags,
      author: { connect: { email: session?.user?.email } },
    },
  })
  res.json(result)
}

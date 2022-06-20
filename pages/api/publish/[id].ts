import prisma from 'lib/prisma'

// PUT /api/publish/:id
export default async function handle(req, res) {
  const id = req.query.id
  const recipe = await prisma.recipe.update({
    where: { id },
    data: { published: true },
  })
  res.json(recipe)
}

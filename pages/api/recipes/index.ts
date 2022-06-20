import prisma from 'lib/prisma'

// GET /api/recipes
export default async function handle(req, res) {
  const reject = () => res.status(404).json({ error: 'No recipe found' })

  const result = await prisma.recipe.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  })

  if (!result) return reject()

  res.json(result)
}

import prisma from 'lib/prisma'

// GET /api/recipes
export default async function handle(req, res) {
  const reject = () => res.status(404).json({ error: 'No recipes found' })
  try {
    const result = await prisma.recipe.findMany({
      where: { published: true },
      include: {
        author: {
          select: { name: true },
        },
      },
    })
  } catch (error) {
    return reject()
  }

  if (!result) return reject()

  res.json(result)
}

import prisma from 'lib/prisma'

// DELETE /api/delete/:id
export default async function handle(req, res) {
  const id = req.query.id

  if (req.method === 'DELETE') {
    const recipe = await prisma.recipe.delete({
      where: { id },
    })
    res.json(recipe)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

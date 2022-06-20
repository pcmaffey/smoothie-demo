import prisma from 'lib/prisma'
import { getSession } from 'next-auth/react'

// GET /api/recipes/:id
export default async function handle(req, res) {
  const id = req.query.id
  const reject = () => res.status(404).json({ error: 'No recipe found' })

  const result = await prisma.recipe.findUnique({
    where: { id },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  })

  if (!result) return reject()

  // if not logged in, recipe must be published
  const session = await getSession({ req })
  if (!session && !result.published) return reject()

  // is current session the author?
  let isAuthor
  if (session && session.user.email === result.author.email) isAuthor = true

  // remove email from result for security
  result.author.email = undefined

  res.json({ ...result, isAuthor })
}

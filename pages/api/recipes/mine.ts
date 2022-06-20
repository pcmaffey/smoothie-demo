import { getSession } from 'next-auth/react'
import prisma from 'lib/prisma'

export default async function handle(req, res) {
  const session = await getSession({ req })
  if (!session) return res.status(404).json({ error: 'Nothing found' })
  const result = await prisma.recipe.findMany({
    where: { author: { email: session.user.email } },
    include: {
      author: {
        select: { name: true },
      },
    },
  })

  res.json(result)
}

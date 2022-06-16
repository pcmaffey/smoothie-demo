import { getSession } from 'next-auth/react'
import prisma from 'lib/prisma'

export default async function handle(req, res) {
  const session = await getSession({ req })
  console.log('session :', session)
  if (!session) return res.json()
  const result = await prisma.recipe.findMany({
    // where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  })

  res.json(result)
}

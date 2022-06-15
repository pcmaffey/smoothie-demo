import React from 'react'
import { GetServerSideProps } from 'next'
import Layout from 'components/Layout'
import Post, { RecipeProps } from 'components/Post'
import prisma from 'lib/prisma'

export const getServerSideProps: GetServerSideProps = async () => {
  const recipes = await prisma.recipe.findMany({
    // where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  })
  return { props: { recipes } }
}

type Props = {
  recipes: RecipeProps[]
}

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
        <main>feed</main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Blog

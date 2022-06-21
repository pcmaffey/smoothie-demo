# What is Smoothie Operator?

Smoothie Operator is a demo project for creating and sharing smoothie recipes. Here's the demo url: (https://smoothie-demo.herokuapp.com/)

## Stack

This project uses [Next.js](https://github.com/vercel/next.js) [with NextAuth.js](https://github.com/nextauthjs/next-auth) for authentication and [Prisma](https://github.com/prisma/prisma) for its ORM, connecting to a postgres database hosted on Heroku.

It was bootstrapped from this example (https://github.com/prisma/blogr-nextjs-prisma/tree/final).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment variables

See `.env-example` for the necessary environment variables in a `.env` file to connect to a postgres server for development, or use Github's OAuth service.

The project will still run locally without these vars, by saving all recipes to localStorage.

When deploying your site set the NEXTAUTH_URL environment variable to the canonical URL of the website.

`NEXTAUTH_URL=https://example.com`

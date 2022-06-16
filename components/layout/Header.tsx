import React from 'react'
import Link from 'components/elements/Link'
import { signOut, useSession } from 'next-auth/react'

import s from './s.module.scss'

export default function Header() {
  const { data: session, status } = useSession()

  return (
    <header className={s.header}>
      <div className={s.h}>
        <Link href="/">
          <h1>Smoothie Operator</h1>
        </Link>
        <h3>Custom yummy, tasty smoothie recipes</h3>
      </div>
      <div className={s.right}>
        <Link href="/api/auth/signin" className={s.login}>
          Log In
        </Link>
      </div>
    </header>
  )
  // let left = (
  //   <div className="left">
  //     <Link href="/">
  //       <a className="bold" data-active={isActive('/')}>
  //         Smoothie Operator
  //       </a>
  //     </Link>
  //     <style jsx>{`
  //       .bold {
  //         font-weight: bold;
  //       }

  //       a {
  //         text-decoration: none;
  //         color: #000;
  //         display: inline-block;
  //       }

  //       .left a[data-active='true'] {
  //         color: gray;
  //       }

  //       a + a {
  //         margin-left: 1rem;
  //       }
  //     `}</style>
  //   </div>
  // )

  // let right = null

  // if (status === 'loading') {
  //   left = (
  //     <div className="left">
  //       <Link href="/">
  //         <a className="bold" data-active={isActive('/')}>
  //           Feed
  //         </a>
  //       </Link>
  //       <style jsx>{`
  //         .bold {
  //           font-weight: bold;
  //         }

  //         a {
  //           text-decoration: none;
  //           color: #000;
  //           display: inline-block;
  //         }

  //         .left a[data-active='true'] {
  //           color: gray;
  //         }

  //         a + a {
  //           margin-left: 1rem;
  //         }
  //       `}</style>
  //     </div>
  //   )
  //   right = (
  //     <div className="right">
  //       <p>Validating session ...</p>
  //       <style jsx>{`
  //         .right {
  //           margin-left: auto;
  //         }
  //       `}</style>
  //     </div>
  //   )
  // }

  // if (!session) {
  //   right = (
  //     <div className="right">
  //       <Link href="/api/auth/signin">
  //         <a data-active={isActive('/signup')}>Log in</a>
  //       </Link>
  //       <style jsx>{`
  //         a {
  //           text-decoration: none;
  //           color: #000;
  //           display: inline-block;
  //         }

  //         a + a {
  //           margin-left: 1rem;
  //         }

  //         .right {
  //           margin-left: auto;
  //         }

  //         .right a {
  //           border: 1px solid black;
  //           padding: 0.5rem 1rem;
  //           border-radius: 3px;
  //         }
  //       `}</style>
  //     </div>
  //   )
  // }

  // if (session) {
  //   left = (
  //     <div className="left">
  //       <Link href="/">
  //         <a className="bold" data-active={isActive('/')}>
  //           Feed
  //         </a>
  //       </Link>
  //       <Link href="/drafts">
  //         <a data-active={isActive('/drafts')}>My drafts</a>
  //       </Link>
  //       <style jsx>{`
  //         .bold {
  //           font-weight: bold;
  //         }

  //         a {
  //           text-decoration: none;
  //           color: #000;
  //           display: inline-block;
  //         }

  //         .left a[data-active='true'] {
  //           color: gray;
  //         }

  //         a + a {
  //           margin-left: 1rem;
  //         }
  //       `}</style>
  //     </div>
  //   )
  //   right = (
  //     <div className="right">
  //       <p>
  //         {session.user.name} ({session.user.email})
  //       </p>
  //       <Link href="/create">
  //         <button>
  //           <a>New post</a>
  //         </button>
  //       </Link>
  //       <button onClick={() => signOut()}>
  //         <a>Log out</a>
  //       </button>
  //       <style jsx>{`
  //         a {
  //           text-decoration: none;
  //           color: #000;
  //           display: inline-block;
  //         }

  //         p {
  //           display: inline-block;
  //           font-size: 13px;
  //           padding-right: 1rem;
  //         }

  //         a + a {
  //           margin-left: 1rem;
  //         }

  //         .right {
  //           margin-left: auto;
  //         }

  //         .right a {
  //           border: 1px solid black;
  //           padding: 0.5rem 1rem;
  //           border-radius: 3px;
  //         }

  //         button {
  //           border: none;
  //         }
  //       `}</style>
  //     </div>
  //   )
  // }
}

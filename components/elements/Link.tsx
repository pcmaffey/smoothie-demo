import s from './s.module.scss'
import { default as NextLink } from 'next/link'
import { useRouter } from 'next/router'
import cx from 'classnames'

export default function Link({
  children,
  className,
  activeClassName,
  Component = 'a',
  shallow,
  ...props
}) {
  const router = useRouter()
  const isActive = router.pathname === props.href

  const c = cx(
    s.a,
    isActive && s.active,
    isActive && activeClassName,
    className
  )
  return (
    <NextLink href={props.href} as={props.as} shallow={shallow} passHref>
      <Component className={c} {...props}>
        {children}
      </Component>
    </NextLink>
  )
}

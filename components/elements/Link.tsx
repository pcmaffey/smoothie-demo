import s from './s.module.scss'
import { default as NextLink } from 'next/link'
import { useRouter } from 'next/router'
import cx from 'classnames'

export default function Link({
  children,
  className,
  currentClassName,
  Component = 'a',
  shallow,
  ...props
}) {
  const router = useRouter()
  const isCurrent = router.pathname === props.href

  const c = cx(
    s.a,
    isCurrent && s.current,
    isCurrent && currentClassName,
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

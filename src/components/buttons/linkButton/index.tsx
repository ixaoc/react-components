import React, { FC, AnchorHTMLAttributes, PropsWithChildren, forwardRef } from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { useForwardRef } from 'helpers/hooks'

import styles from '../button/index.module.sass'
import linkStyles from './index.module.sass'

export type LinkButtonProps = {
  native?: boolean
} & AnchorHTMLAttributes<HTMLAnchorElement>
  & PropsWithChildren

export const LinkButton = 
  forwardRef<HTMLAnchorElement, LinkButtonProps>((
    {
      native,
      href = '#',
      className,
      children,
      ...props
    }, 
    forwardedRef
  ) => {
    const ref = useForwardRef<HTMLAnchorElement>(forwardedRef)

    const commonProps = {
      className: clsx(
        styles.button, 
        linkStyles.button, 
        className
      ),
      ...props
    }

    if (native) {
      return (
        <a ref={ref} href={href} {...commonProps}>
          {children}
        </a>
      )
    }

    return (
      <NavLink ref={ref} to={href} {...commonProps}>
        {children}
      </NavLink>
    )
  })

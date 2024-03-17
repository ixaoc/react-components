import React, { FC, ReactNode, ComponentType, ComponentPropsWithRef, ButtonHTMLAttributes, PropsWithChildren, createElement, forwardRef } from 'react'
import clsx from 'clsx'
import { Link, NavLink } from 'react-router-dom'
import { useForwardRef } from 'helpers/hooks'
import styles from './index.module.sass'

type Props<T> =
  T extends keyof JSX.IntrinsicElements
    ? ComponentPropsWithRef<T> & BaseButtonProps
    : T extends ComponentType<infer P>
    ? P extends ComponentPropsWithRef<any>
      ? P & BaseButtonProps
      : never
    : never

type PartialComponentProps<T> = PropsWithChildren<{ component?: T } & Props<T>>
type ComponentProps<T> = PropsWithChildren<{ component: T } & Props<T>>

type ButtonProps = PartialComponentProps<'button'>
type AnchorProps = ComponentProps<'a'>
type LinkProps = ComponentProps<typeof Link>
type NavLinkProps = ComponentProps<typeof NavLink>

type BaseButtonProps = {
  loading?: boolean
  disable?: boolean
  fw?: boolean
}

type ButtonComponentProps = ButtonProps | AnchorProps | LinkProps | NavLinkProps
  
export const Button: FC<ButtonComponentProps> = ({ 
  component = 'button',
  className,
  fw,
  loading,
  disable,
  children,
  ..._props
}) => {

  const props = {
    className: clsx(
      styles.button,
      fw && styles.buttonFullWidth,
      loading && styles.buttonLoading,
      disable && styles.buttonDisable,
      className
    ),
    ..._props
  }

  const inner = (
    <>
      <div className={styles.buttonContent}>{children}</div>
      {loading ? <div className={styles.buttonLoader}>...</div> : null}
    </>
  )

  return createElement(component as any, props as any, inner)
}

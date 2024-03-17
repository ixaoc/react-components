import React, { FC, HTMLProps } from 'react'
import styles from './index.module.sass'
import clsx from 'clsx'

export const Error: FC<HTMLProps<HTMLElement>> = ({ className, children, ...props }) => {
  return (
    <span className={clsx(styles.error, className)} {...props}>
      {children}
    </span>
  )
}

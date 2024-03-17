import React, { FC, HTMLProps } from 'react'
import styles from './index.module.sass'
import clsx from 'clsx'

export const Hint: FC<HTMLProps<HTMLElement>> = ({ className, children, ...props }) => {
  return (
    <span className={clsx(styles.hint, className)} {...props}>
      {children}
    </span>
  )
}

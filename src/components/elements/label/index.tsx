import React, { FC, HTMLProps } from 'react'
import styles from './index.module.sass'
import clsx from 'clsx'

export const Label: FC<HTMLProps<HTMLLabelElement>> = ({ className, children, ...props }) => {
  return (
    <label className={clsx(styles.label, className)} {...props}>
      {children}
    </label>
  )
}

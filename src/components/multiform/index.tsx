import { FC, Ref, PropsWithChildren, useState, useEffect, useRef, forwardRef } from 'react'
import styles from './index.module.sass'
import clsx from 'clsx'
import { Menu, MenuItem } from './menu'
export { useStepper } from './useStepper'

interface IProps {
  ref?: Ref<HTMLInputElement>
  loading?: boolean
  title: string
  className?: string

  menu: {
    format: 'stepper' | 'list'
    items: any[]
    selectedIndex: number
    onChange?: Function
  }

  confirm?: any
}

const Loader: FC<any> = () => {
  return (
    <div>...loading...</div>
  )
}

export const ModalMultiForm: FC<PropsWithChildren & IProps> =
  forwardRef<HTMLInputElement, PropsWithChildren & IProps>((
    {
      loading = false,
      title,
      menu: {format, items, selectedIndex, onChange},
      className,
      children
    }, ref) => {
      return (
        <div ref={ref} className={clsx(styles.main, className)}>
          <div className={styles.sidebar}>
            <h2 className={styles.title}>{title}</h2>

            <Menu
              format={format}
              selectedIndex={selectedIndex}
              onChange={onChange}
            >
              {
                items.map((item, index: number) => (
                  <MenuItem key={index}>{item.name}</MenuItem>
                ))
              }
            </Menu>
          </div>

          <div className={clsx(styles.content, loading && styles.contentLoading)}>
            { loading && <Loader compact /> }
            {children}
          </div>
        </div>
      )
})

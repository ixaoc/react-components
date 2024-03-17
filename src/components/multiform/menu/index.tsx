import {FC, PropsWithChildren, ReactElement, Children, isValidElement, cloneElement, useState, useEffect} from 'react'
import styles from './index.module.sass'
import clsx from 'clsx'
import {OptionCheck} from './optionCheck'

interface Menu {
  format: 'stepper' | 'list'
  selectedIndex: number
  onChange?: Function
}

export const Menu: FC<PropsWithChildren & Menu> = ({
  format = 'list',
  selectedIndex = 0,
  onChange,
  children
}) => {
  const _children = Children.map(children, (child, index: number): any => {
    if (isValidElement(child)) {
      return cloneElement(child as React.ReactElement<any>, {
        isClickable: format === 'list',
        isActive: index === selectedIndex,
        isComplete: index < selectedIndex,
        onClick: () => onChange && onChange(index)
      })
    }

    return child
  })

  return (
    <ul className={clsx(
      styles.menu,
      format === 'stepper' && styles.menuStepper,
      format === 'list' && styles.menuList
    )}>
      {_children}
    </ul>
  )
}

export const MenuItem: FC<PropsWithChildren & {
  isClickable?: boolean
  isActive?: boolean
  isComplete?: boolean
  onClick?: () => void
}> = ({
  isClickable = false,
  isActive = false,
  isComplete = false,
  onClick,
  children
}) => {
  return (
    <li className={clsx(
      styles.menuItem,
      isClickable && styles.menuItemClickable,
      isComplete && styles.menuItemComplete,
      isActive && styles.menuItemActive,
    )} onClick={() => isClickable && onClick && onClick()}>
      <OptionCheck className={styles.menuCheck} state={isComplete ? 'complete' : isActive ? 'active' : undefined} />
      <span className={styles.menuItemText}>{children}</span>
    </li>
  )
}

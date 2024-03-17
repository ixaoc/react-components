import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { Input } from 'components'
import { useForwardRef } from 'helpers/hooks'
import { InputProps } from '../input'
import styles from './index.module.sass'

type SearchInputProps = { 
  onClear: Function 
} & InputProps

export const SearchInput = 
  forwardRef<HTMLInputElement, SearchInputProps>((
    { 
      className, 
      onClear,
      ...props
    }, 
    forwardedRef
  ) => {
    const ref = useForwardRef<HTMLInputElement>(forwardedRef)

    return (
      <Input 
        ref={ref}

        className={
          clsx(
            styles.field,
            className
          )
        }

        leftAddon={{
          name: 'icon',
          type: 'search',
          className: styles.icon,
          onClick: () => { 
            ref?.current?.focus()
          }
        }}
        rightAddon={{
          name: 'clear',
          onClear: onClear
        }}

        { ...props }
      />
    )
  })

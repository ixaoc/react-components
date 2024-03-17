import React, { forwardRef, useState, useCallback } from 'react'
import clsx from 'clsx'
import { Input } from 'components'
import { useForwardRef } from 'helpers/hooks'
import { InputProps } from '../input'
import styles from './index.module.sass'


export const PasswordInput = 
  forwardRef<HTMLInputElement, InputProps>((
    { 
      className, 
      ...props
    }, 
    forwardedRef
  ) => {
    const ref = useForwardRef<HTMLInputElement>(forwardedRef)
    const [show, setShow] = useState(false)

    const handleOnShowHide = useCallback(
      () => void setShow(!show), [show]
    )

    return (
      <Input 
        ref={ref}
        type={show ? 'text' : 'password'}
        
        className={
          clsx(
            styles.field,
            className
          )
        }

        rightAddon={{
          name: 'showHide',
          show,
          onShow: handleOnShowHide
        }}

        { ...props }
      />
    )
  })


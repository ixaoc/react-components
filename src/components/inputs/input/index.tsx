import React, { ReactNode, InputHTMLAttributes, isValidElement, useState, useEffect, useRef, forwardRef } from 'react'
import clsx from 'clsx'
import { Field, Label, NativeInput, Error } from 'components'
import { IconAddon, ShowHideAddon, ClearAddon } from '../addons'
import { useForwardRef } from 'helpers/hooks'
import { firstLetterUppercase } from 'helpers/utils'
import styles from './index.module.sass'

type Addon = (() => ReactNode) | ReactNode | {}

export type InputProps = {
  appearance?: 'default' | 'inside'
  fieldClassName?: string
  className?: string
  label?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  leftAddon?: Addon
  rightAddon?: Addon
  hint?: any
  error?: {
    message?: string
  } | boolean
} & InputHTMLAttributes<HTMLInputElement>

export const Input = 
  forwardRef<HTMLInputElement, InputProps>((
    { 
      appearance = 'default',
      type = "text",
      fieldClassName,
      className,
      label,
      value = '',
      leftAddon, 
      rightAddon,
      hint,
      error,
      ...props
    }, 
    forwardedRef
  ) => {
    const ref = useForwardRef<HTMLInputElement>(forwardedRef)

    const [isTouch, setIsTouch] = useState<boolean>(
      value.trim().length > 0 || 
      (
        typeof props.placeholder === 'string' && 
        props.placeholder.length > 0
      )
    )
    const [isFocus, setIsFocus] = useState(false)

    // ------------------------- 

    const addon = (position: string, component?: Addon) => {
      if(!component || appearance === 'inside')
        return
   
      const fromObject = ({ name, ...props }: Record<string, any>) => {
        switch (name) {
          case 'icon':
            return (
              <IconAddon 
                name={props.type} 
                className={props.className} 
                onClick={() => {
                  props.onClick(ref)
                }}
              />
            )

          case 'clear':
            return value.length > 0 
              ? (
                <ClearAddon 
                  propRef={ref} 
                  onClear={props.onClear}
                />
              ) : null

          case 'showHide':
            return (
              <ShowHideAddon 
                show={props.show} 
                onShow={props.onShow}
              />
            )
        }
      }

      return (
        <div className={clsx(styles.addon, styles[`addon${firstLetterUppercase(position)}`])}>
          { isValidElement(component) && component }
          { !isValidElement(component) && (
              <>
                { typeof component === 'function' && component() }
                { typeof component === 'object' && fromObject(component) }
              </>
            )
          }
        </div>
      )
    }

    // ------------------------- 

    return (
      <Field 
        inputRef={ref}
        appearance={appearance}
        disabled={props.disabled}
        label={label}
        className={fieldClassName}
        inputWrapClassName={className}
        hint={hint}
        error={error}
        isTouch={isTouch}
        isFocus={isFocus}
      >
        {addon('left', leftAddon)}
        
        <NativeInput
          ref={ref}
          type={type}
          value={value}

          touch={{
            value: isTouch,
            set: setIsTouch
          }}
          focus={{
            value: isFocus,
            set: setIsFocus
          }}

          { ...props }
        />
        
        {addon('right', rightAddon)}
      </Field>
    )
  })

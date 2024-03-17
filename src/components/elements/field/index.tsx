import React, { FC, RefObject, PropsWithChildren } from 'react'
import clsx from 'clsx'
import { Label, Hint, Error } from 'components'

import styles from './index.module.sass'

export type Field = {
  inputRef?: RefObject<HTMLInputElement>
  appearance?: 'default' | 'inside'
  label?: string
  className?: string
  inputWrapClassName?: string
  hint?: string
  error?: {
    message?: string
  } | boolean
  disabled?: boolean, 
  isTouch?: boolean
  isFocus?: boolean
} & PropsWithChildren

export const Field: FC<Field> = ({ 
  inputRef,
  appearance = 'default',
  label,
  className,
  inputWrapClassName,
  hint,
  error,
  disabled, 
  isTouch, 
  isFocus, 
  children
}) => {
  const handlerFocusInput = (e: any) => {
    inputRef?.current?.focus()
  }

  const renderLabel = () => ( 
    <Label 
      className={
        clsx(
          styles.label,
          appearance === 'inside' && styles.labelInside,
          appearance === 'inside' && isTouch && styles.labelInsideTouch
        )
      }
      onClick={handlerFocusInput}
    >
      {label}
    </Label>
  )

	return (
	  <div 
	    className={clsx(
        styles.field,
        className
      )}
    >
      {appearance === 'default' && label && renderLabel()}

      <div 
        className={clsx(
          styles.inputWrap,
          appearance === 'inside' && styles.inputWrapInside,
          disabled && styles.inputWrapDisabled,
          isFocus && styles.inputWrapFocus,
          isTouch && styles.inputWrapTouch,
          error && styles.inputWrapError,
          inputWrapClassName
        )}
        onClick={handlerFocusInput}
      >
        {appearance === 'inside' && label && renderLabel()}
        {children}
      </div>

      {hint && <Hint>{hint}</Hint>}
      {typeof error === 'object' && error?.message && <Error>{error.message}</Error>}
    </div>
	)
}

import React, { InputHTMLAttributes, FocusEvent, useEffect, forwardRef } from 'react'
import clsx from 'clsx'
import styles from './index.module.sass'

type NativeInputProps = {
  className?: string
  value?: string
  touch: {
    value: boolean,
    set: Function
  }
  focus: {
    value: boolean,
    set: Function
  }
} & InputHTMLAttributes<HTMLInputElement>

export const NativeInput = 
  forwardRef<HTMLInputElement, NativeInputProps>((
    {
      className,
      value = '',
      touch,
      focus,
      ...props
    },
    forwardedRef
  ) => {  	
  	useEffect(() => {
    	if(!touch?.value && value.length) {
        touch?.set?.(true)
    	}
    	
    	if(touch?.value && !focus?.value && !value.length && !props.placeholder) {
        touch?.set?.(false)
    	}
  	})
  	
    // -------------------------
  	
  	const onFocus = (e: FocusEvent<HTMLInputElement>): void => {
      touch?.set?.(true)
      focus?.set?.(true)
      
    	if(props.onFocus) {
      	props.onFocus(e)
    	}
  	}
  	
  	const onBlur = (e: FocusEvent<HTMLInputElement>): void => {
      focus?.set?.(false)
    	
    	if(props.onBlur) {
      	props.onBlur(e)
    	}
  	}
    
  	return (
      <input
        ref={forwardedRef}
        className={
          clsx(
            styles.input,
            className,
          )
        }
        
        value={ value }
        { ...props }
        
        onFocus={onFocus}
        onBlur={onBlur}
      />
  	)
  })


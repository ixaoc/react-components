import React, { FC, forwardRef, useCallback } from 'react'
import clsx from 'clsx'
import styles from './index.module.sass'
import CloseIcon from 'shared/svg/close'

interface ClearButtonProps {
  ref: any
  className?: string
  onClear: () => void
}

export const ClearButton: FC<ClearButtonProps> = 
  forwardRef<HTMLElement, ClearButtonProps>(({ 
    className,
    onClear 
  }, ref) => {
    const click = useCallback(() => { 
      if (typeof ref !== 'function') {
        ref?.current?.focus()
      }
      
      onClear()
    }, [onClear])

    return (
      <span 
        className={clsx(styles.button, className)} 
        onClick={click}
      >
        <CloseIcon />
      </span> 
    )
  })

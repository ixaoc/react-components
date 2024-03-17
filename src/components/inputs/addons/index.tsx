import React, { FC, Ref, useCallback } from 'react'
import clsx from 'clsx'
import styles from './index.module.sass'
import CloseIcon from 'shared/svg/close'
import SearchIcon from 'shared/svg/search'

interface IconAddonProps {
  name: string
  className?: string
  onClick?: () => void
}

export const IconAddon: FC<IconAddonProps> = ({
	name, 
	className, 
	onClick = () => {}
}) => {
	return (
		<div className={className} onClick={onClick}>
			<SearchIcon />
		</div>
	)
}

interface ShowHideAddonProps {
  show: boolean
  onShow: () => {} 
}

export const ShowHideAddon: FC<ShowHideAddonProps> = ({ 
  show, 
  onShow
}) => {
	return (
		<span className={styles.showHideButton} onClick={onShow}>
      { show ? "Hide" : "Show" }
    </span>
	)
}

interface ClearAddonProps {
  propRef: Ref<HTMLInputElement>
  className?: string
  onClear: () => {}
}

export const ClearAddon: FC<ClearAddonProps> = 
  ({ 
  	propRef,
    className,
    onClear 
  }) => {
    const click = useCallback(() => { 
      if (typeof propRef !== 'function') {
        propRef?.current?.focus()
      }
      
      onClear()
    }, [onClear])

    return (
      <span 
        className={clsx(styles.clearButton, className)} 
        onClick={click}
      >
        <CloseIcon />
      </span> 
    )
  }

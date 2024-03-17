import React, { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'
import styles from './index.module.sass'

export const Page: FC<
	PropsWithChildren & { 
		className?: string 
	}
> = ({className, children}) => {
	return (
		<div className={clsx(styles.page, className)}>
			{children}
		</div>
	)
}

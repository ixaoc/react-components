import React, { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'
import styles from './index.module.sass'

export const PageTitle: FC<
	PropsWithChildren & { 
		className?: string 
	}
> = ({className, children}) => {
	return (
		<h1 className={clsx(styles.title, className)}>
			{children}
		</h1>
	)
}

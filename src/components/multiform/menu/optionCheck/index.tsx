import { FC } from 'react'
import styles from './index.module.sass'
import clsx from 'clsx'

export const OptionCheck: FC<{
    className?: string
    state?: 'complete' | 'active'
}> = ({className, state}) => {
    return (
        <div className={clsx(
            styles.check,
            state === 'active' && styles.checkActive,
            state === 'complete' && styles.checkComplete,
            className
        )}>
            {state === 'complete' && <div>V</div>}
        </div>
    )
}

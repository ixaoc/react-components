import { FC, useState, useEffect, useRef } from 'react'
import clsx from 'clsx'

import styles from './index.module.sass'
import { Label, Hint, Error } from 'components'

export interface ISelectOption {
  label?: string
  value: any
  [index: string]: any
}

export interface ISelect {
  name?: string
  label?: string | null
  placeholder?: string
  type?: 'button' | 'reset' | 'submit'
  disabled?: boolean
  hint?: string
  options: ISelectOption[]
  value: any
  onChange?: (v: { index: number; option: ISelectOption }) => void
  fieldClassName?: string
  className?: string
  selectListClassName?: string

  error?: any
}


const Options: FC<any> = ({
  open,
  setOpen,
  className,
  inputRef,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const click = (e: Event) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as HTMLDivElement) &&

        inputRef.current &&
        !inputRef.current.contains(e.target)
      ) {
        setOpen(false)
      }
    }

    return window.addEventListener('click', click)
  }, [])

  return (
    <div 
      ref={ref} 
      className={clsx(
        styles.values, 
        open && styles.valuesOpen, 
        className
      )}
    >
      {children}
    </div>
  )
}


export const Select: FC<ISelect> = ({
  name,
  label,
  placeholder = 'Select option',
  type = 'button',
  hint,
  disabled,


  options,
  value,
  onChange,

  className,
  fieldClassName,
  selectListClassName,


  error,

  ...params
}) => {
  const [open, setOpen] = useState(false)

  const ref = useRef<HTMLButtonElement>(null)

  const currentOption = options.find((option: ISelectOption) => option.value == value)

  return (
    <div className={clsx(styles.field, fieldClassName)}>
      {label && <Label>{label}</Label>}

      <div className={styles.wrapper}>
        <button
          ref={ref}
          name={name}
          type={type}
          className={clsx(
            styles.select,
            open && styles.selectOpen,
            disabled && styles.selectDisabled,
            error && styles.selectError,
            className,
          )}
          onClick={() => {
            setOpen(!open)
          }}
        >
          <div className={clsx(styles.selectText)}>
            
            {currentOption?.label ?? currentOption?.value ?? (
              <span className={styles.placeholder}>{placeholder}</span>
            )}

          </div>
        </button>

        <Options inputRef={ref} open={open} setOpen={setOpen} >
          <ul className={styles.valueList}>
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  onChange && onChange({ index, option })
                  setOpen(false)
                }}
              >
                {option.label ?? option.value}
              </li>
            ))}
          </ul>
        </Options>
      </div>

      <div className={styles.texts}>
        {hint && <Hint>{hint}</Hint>}
        {error?.message && <Error>{error.message}</Error>}
      </div>
    </div>
  )
}

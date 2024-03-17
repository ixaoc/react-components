import { FC } from 'react'
import styles from './index.module.sass'
import clsx from 'clsx'
import { Select } from 'components'
import { LANGUAGES } from 'helpers/data'

import { ISelect, ISelectOption } from 'components'

export type ILanguageSelect = Pick<ISelect, Exclude<keyof ISelect, 'options'>> &
  Partial<Pick<ISelect, 'options'>> & {
    onChange?: (v: { index: number; option: ISelectOption }) => void
  }

export const LanguageSelect: FC<ILanguageSelect> = ({
  name,
  placeholder = 'Select language',
  fieldClassName,
  options,
  onChange,
  ...params
}) => {
  const defaultOptions: ISelectOption[] = []

  Object.keys(LANGUAGES).map((key) => {
    defaultOptions.push({ label: LANGUAGES[key], value: key })
  })

  return (
    <Select
      name={name}
      placeholder={placeholder}
      fieldClassName={clsx(styles.select, fieldClassName)}
      options={options ?? defaultOptions}
      onChange={onChange}
      {...params}
    />
  )
}
